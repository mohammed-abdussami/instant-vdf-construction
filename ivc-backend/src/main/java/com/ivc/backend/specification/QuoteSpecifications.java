package com.ivc.backend.specification;

import com.ivc.backend.entity.LeadStatus;
import com.ivc.backend.entity.Quote;
import jakarta.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;

public final class QuoteSpecifications {

    private QuoteSpecifications() {}

    public static Specification<Quote> filter(String search, LeadStatus status, String dateFilter) {
        return (root, query, cb) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (search != null && !search.isBlank()) {
                String like = "%" + search.trim().toLowerCase() + "%";
                predicates.add(cb.or(
                        cb.like(cb.lower(root.get("name")), like),
                        cb.like(cb.lower(root.get("phone")), like),
                        cb.like(cb.lower(root.get("email")), like),
                        cb.like(cb.lower(root.get("company")), like),
                        cb.like(cb.lower(root.get("service")), like),
                        cb.like(cb.lower(root.get("location")), like)
                ));
            }

            if (status != null) {
                predicates.add(cb.equal(root.get("status"), status));
            }

            Predicate datePredicate = DateFilters.build(cb, root.get("createdAt"), dateFilter);
            if (datePredicate != null) {
                predicates.add(datePredicate);
            }

            return cb.and(predicates.toArray(new Predicate[0]));
        };
    }
}