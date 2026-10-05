package com.ivc.backend.entity;

/**
 * Shared status lifecycle for both Quote requests and Contact inquiries.
 */
public enum LeadStatus {
    NEW,
    IN_PROGRESS,
    CONTACTED,
    APPROVED,
    COMPLETED,
    REJECTED
}