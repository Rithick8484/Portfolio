package com.rithick.portfolio.controller;

import com.rithick.portfolio.dto.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/health")
@CrossOrigin(origins = "*")
public class HealthController {

    @GetMapping
    public ResponseEntity<ApiResponse<Map<String, Object>>> checkHealth() {
        Map<String, Object> status = new HashMap<>();
        status.put("status", "UP");
        status.put("service", "Spring Boot Portfolio Backend");
        status.put("database", "MySQL (portfolio_db)");
        status.put("developer", "Rithick P - Java Full-Stack Developer");
        return ResponseEntity.ok(ApiResponse.success("Backend is running smoothly", status));
    }
}
