package com.rithick.portfolio.service;

import com.rithick.portfolio.dto.ContactRequestDto;
import com.rithick.portfolio.entity.ContactMessage;
import com.rithick.portfolio.repository.ContactMessageRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ContactService {

    private final ContactMessageRepository contactMessageRepository;

    public ContactService(ContactMessageRepository contactMessageRepository) {
        this.contactMessageRepository = contactMessageRepository;
    }

    @Transactional
    public ContactMessage saveMessage(ContactRequestDto dto) {
        ContactMessage message = new ContactMessage(
                dto.getName().trim(),
                dto.getEmail().trim(),
                dto.getSubject().trim(),
                dto.getMessage().trim()
        );
        return contactMessageRepository.save(message);
    }
}
