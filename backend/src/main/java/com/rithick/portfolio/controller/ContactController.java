package com.rithick.portfolio.controller;

import com.rithick.portfolio.dto.ApiResponse;
import com.rithick.portfolio.dto.ContactRequestDto;
import com.rithick.portfolio.entity.ContactMessage;
import com.rithick.portfolio.service.ContactService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*")
public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping
    public ResponseEntity<ApiResponse<ContactMessage>> submitContact(@Valid @RequestBody ContactRequestDto dto) {
        ContactMessage saved = contactService.saveMessage(dto);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success("Message sent successfully!", saved));
    }
}
