package com.ivc.backend.controller;

import com.ivc.backend.dto.ContactRequest;
import com.ivc.backend.dto.StatusUpdateRequest;
import com.ivc.backend.entity.Contact;
import com.ivc.backend.entity.LeadStatus;
import com.ivc.backend.service.ContactService;
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
@RequestMapping("/api/contacts")
@RequiredArgsConstructor
public class ContactController {

    private static final Set<String> SORTABLE_FIELDS = Set.of(
            "name", "phone", "email", "service", "location", "status", "createdAt"
    );

    private final ContactService contactService;

    @PostMapping("/submit")
    public Map<String, Object> submit(@Valid @RequestBody ContactRequest req) {
        Contact saved = contactService.submit(req);
        return Map.of("success", true, "id", saved.getId());
    }

    @GetMapping
    public Page<Contact> getAll(
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
        return contactService.getAll(search, status, dateFilter, pageable);
    }

    @PutMapping("/{id}/status")
    public Contact updateStatus(@PathVariable Long id, @Valid @RequestBody StatusUpdateRequest req) {
        return contactService.updateStatus(id, req.getStatus());
    }

    @DeleteMapping("/{id}")
    public Map<String, Object> delete(@PathVariable Long id) {
        contactService.delete(id);
        return Map.of("success", true, "id", id);
    }
}