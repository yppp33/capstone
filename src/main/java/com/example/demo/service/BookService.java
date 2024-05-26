package com.example.demo.service;

import com.example.demo.model.Book;
import com.example.demo.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class BookService {

    private static final Logger logger = LoggerFactory.getLogger(BookService.class);

    @Autowired
    private BookRepository bookRepository;

    public List<Book> getBooksByIds(List<Long> ids) {
        logger.info("Querying database for book IDs: {}", ids);

        List<Book> books = ids.stream()
                .map(id -> bookRepository.findById(id))
                .filter(Optional::isPresent)
                .map(Optional::get)
                .collect(Collectors.toList());

        logger.info("Books retrieved from database: {}", books);
        return books;
    }

    public Optional<Book> getBookById(Long id) {
        logger.info("Querying database for book ID: {}", id);
        Optional<Book> book = bookRepository.findById(id);
        if (book.isPresent()) {
            logger.info("Found book: {}", book.get());
        } else {
            logger.warn("Book not found for ID: {}", id);
        }
        return book;
    }

    public List<Book> getAllBooks() {
        List<Book> books = bookRepository.findAll();
        logger.info("Books retrieved from database: {}", books);
        return books;
    }
}
