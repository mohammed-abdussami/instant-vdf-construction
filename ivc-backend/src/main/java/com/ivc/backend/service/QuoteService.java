package com.ivc.backend.service;

import com.ivc.backend.dto.QuoteRequest;
import com.ivc.backend.entity.LeadStatus;
import com.ivc.backend.entity.Quote;
import com.ivc.backend.repository.QuoteRepository;
import com.ivc.backend.specification.QuoteSpecifications;
import com.ivc.backend.exception.ResourceNotFoundException;
import org.springframework.transaction.annotation.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class QuoteService {

    private final QuoteRepository quoteRepository;

    @Transactional
    public Quote submit(QuoteRequest req) {
        Quote quote = new Quote();
        quote.setName(req.getName());
        quote.setPhone(req.getPhone());
        quote.setEmail(req.getEmail() == null ? null : req.getEmail().trim().toLowerCase());
        quote.setCompany(req.getCompany());
        quote.setService(req.getService());
        quote.setArea(req.getArea());
        quote.setLocation(req.getLocation());
        quote.setTimeline(req.getTimeline());
        quote.setDescription(req.getDescription());
        return quoteRepository.save(quote);
    }

    @Transactional(readOnly = true)
    public Page<Quote> getAll(String search, LeadStatus status, String dateFilter, Pageable pageable) {
        return quoteRepository.findAll(QuoteSpecifications.filter(search, status, dateFilter), pageable);
    }

    @Transactional
    public Quote updateStatus(Long id, LeadStatus status) {
        Quote quote = quoteRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Quote not found: " + id));
        quote.setStatus(status);
        return quoteRepository.save(quote);
    }

    @Transactional
    public void delete(Long id) {
        if (!quoteRepository.existsById(id)) {
            throw new IllegalArgumentException("Quote not found: " + id);
        }
        quoteRepository.deleteById(id);
    }
}