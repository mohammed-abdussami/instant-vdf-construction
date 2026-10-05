package com.ivc.backend.controller;

import com.ivc.backend.dto.LoginRequest;
import com.ivc.backend.dto.LoginResponse;
import com.ivc.backend.entity.AdminUser;
import com.ivc.backend.repository.AdminUserRepository;
import com.ivc.backend.security.JwtService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AdminUserRepository adminUserRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    @PostMapping("/login")
    public LoginResponse login(@Valid @RequestBody LoginRequest req) {
        AdminUser user = adminUserRepository.findByEmail(req.getEmail())
                .orElseThrow(() -> new org.springframework.security.authentication.BadCredentialsException("Invalid credentials"));

        if (!passwordEncoder.matches(req.getPassword(), user.getPasswordHash())) {
            throw new org.springframework.security.authentication.BadCredentialsException("Invalid credentials");
        }

        String token = jwtService.generateToken(user.getEmail());
        return new LoginResponse(token, user.getEmail());
    }
}