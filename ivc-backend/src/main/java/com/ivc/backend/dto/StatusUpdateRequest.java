package com.ivc.backend.dto;

import com.ivc.backend.entity.LeadStatus;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class StatusUpdateRequest {
    @NotNull(message = "status is required")
    private LeadStatus status;
}