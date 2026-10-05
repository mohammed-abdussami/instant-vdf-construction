package com.ivc.backend.controller;

import com.ivc.backend.dto.QuoteRequest;
import com.ivc.backend.dto.StatusUpdateRequest;
import com.ivc.backend.entity.LeadStatus;
import com.ivc.backend.entity.Quote;
import com.ivc.backend.service.QuoteService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Set;

@RestController
@RequestMapping("/api/quotes")
@RequiredArgsConstructor
public class QuoteController {

    private static final Set<String> SORTABLE_FIELDS = Set.of(
            "name", "phone", "email", "company", "service", "area", "location", "timeline", "status", "createdAt"
    );

    private final QuoteService quoteService;

    @PostMapping("/submit")
    public Map<String, Object> submit(@Valid @RequestBody QuoteRequest req) {
        Quote saved = quoteService.submit(req);
        return Map.of("success", true, "id", saved.getId());
    }

    @GetMapping
    public Page<Quote> getAll(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String search,
            @RequestParam(required = false) LeadStatus status,
            @RequestParam(required = false) String dateFilter,
            @RequestParam(defaultValue = "createdAt") String sortBy,
            @RequestParam(defaultValue = "desc") String sortDir
    ) {
        int safeSize = (size == 20) ? 20 : 10; // only 10 or 20 per page are supported
        String safeSortBy = SORTABLE_FIELDS.contains(sortBy) ? sortBy : "createdAt";
        Sort.Direction direction = "asc".equalsIgnoreCase(sortDir) ? Sort.Direction.ASC : Sort.Direction.DESC;

        Pageable pageable = PageRequest.of(Math.max(page, 0), safeSize, Sort.by(direction, safeSortBy));
        return quoteService.getAll(search, status, dateFilter, pageable);
    }

    @PutMapping("/{id}/status")
    public Quote updateStatus(@PathVariable Long id, @Valid @RequestBody StatusUpdateRequest req) {
        return quoteService.updateStatus(id, req.getStatus());
    }

    @DeleteMapping("/{id}")
    public Map<String, Object> delete(@PathVariable Long id) {
        quoteService.delete(id);
        return Map.of("success", true, "id", id);
    }
}