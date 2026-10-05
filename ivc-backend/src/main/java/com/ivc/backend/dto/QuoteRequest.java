package com.ivc.backend.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class QuoteRequest {
    @NotBlank
    private String name;

    @NotBlank
    private String phone;

    private String email;
    private String company;
    private String service;
    private String area;
    private String location;
    private String timeline;
    private String description;
}