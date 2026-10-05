package com.ivc.backend.service;

import com.ivc.backend.dto.ContactRequest;
import com.ivc.backend.entity.Contact;
import com.ivc.backend.entity.LeadStatus;
import com.ivc.backend.exception.ResourceNotFoundException;
import com.ivc.backend.repository.ContactRepository;
import com.ivc.backend.specification.ContactSpecifications;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class ContactService {

    private final ContactRepository contactRepository;

    @Transactional
    public Contact submit(ContactRequest req) {
        Contact contact = new Contact();
        contact.setName(req.getName().trim());
        contact.setPhone(req.getPhone().trim());
        contact.setEmail(req.getEmail() == null ? null : req.getEmail().trim().toLowerCase());
        contact.setService(req.getService());
        contact.setLocation(req.getLocation());
        contact.setMessage(req.getMessage());
        return contactRepository.save(contact);
    }

    @Transactional(readOnly = true)
    public Page<Contact> getAll(String search, LeadStatus status, String dateFilter, Pageable pageable) {
        return contactRepository.findAll(ContactSpecifications.filter(search, status, dateFilter), pageable);
    }

    @Transactional
    public Contact updateStatus(Long id, LeadStatus status) {
        Contact contact = contactRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Contact not found: " + id));
        contact.setStatus(status);   // saved automatically on commit (JPA dirty checking)
        return contact;
    }

    @Transactional
    public void delete(Long id) {
        if (!contactRepository.existsById(id)) {
            throw new ResourceNotFoundException("Contact not found: " + id);
        }
        contactRepository.deleteById(id);
    }
}