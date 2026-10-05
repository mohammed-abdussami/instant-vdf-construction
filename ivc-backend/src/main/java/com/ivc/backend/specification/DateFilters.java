package com.ivc.backend.specification;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.Expression;
import jakarta.persistence.criteria.Predicate;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;

/**
 * Shared helper for the "Today's Leads" / "This Week" quick filters.
 * Uses the server's default zone as the business timezone for "day" boundaries.
 */
final class DateFilters {

    private DateFilters() {}

    static Predicate build(CriteriaBuilder cb, Expression<Instant> createdAt, String dateFilter) {
        if (dateFilter == null || dateFilter.isBlank()) {
            return null;
        }

        ZoneId zone = ZoneId.systemDefault();
        LocalDate today = LocalDate.now(zone);

        return switch (dateFilter.trim().toLowerCase()) {
            case "today" -> cb.greaterThanOrEqualTo(createdAt, today.atStartOfDay(zone).toInstant());
            case "week" -> {
                LocalDate startOfWeek = today.minusDays(today.getDayOfWeek().getValue() - 1L); // Monday
                yield cb.greaterThanOrEqualTo(createdAt, startOfWeek.atStartOfDay(zone).toInstant());
            }
            default -> null;
        };
    }
}