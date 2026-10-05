package com.ivc.backend.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ContactRequest {
    @NotBlank
    private String name;

    @NotBlank
    private String phone;

    private String email;
    private String service;
    private String location;
    private String message;
}