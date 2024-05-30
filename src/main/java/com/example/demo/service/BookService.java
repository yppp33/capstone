package com.example.demo.service;

import com.example.demo.model.Book;
import com.example.demo.model.Similarity;
import com.example.demo.repository.BookRepository;
import com.example.demo.repository.SimilarityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class BookService {

    private static final Logger logger = LoggerFactory.getLogger(BookService.class);

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private SimilarityRepository similarityRepository;


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

    public List<Book> getSimilarBooks(Long id) {
        logger.info("Querying database for similar books for ID: {}", id);
        Optional<Similarity> similarity = similarityRepository.findById(id);
        if (similarity.isPresent()) {
            List<Long> similarBookIds = Stream.of(
                    similarity.get().getTop1(), similarity.get().getTop2(), similarity.get().getTop3(),
                    similarity.get().getTop4(), similarity.get().getTop5(), similarity.get().getTop6(),
                    similarity.get().getTop7(), similarity.get().getTop8(), similarity.get().getTop9(),
                    similarity.get().getTop10(), similarity.get().getTop11(), similarity.get().getTop12(),
                    similarity.get().getTop13(), similarity.get().getTop14(), similarity.get().getTop15()
            ).collect(Collectors.toList());

            logger.info("Found similar book IDs: {}", similarBookIds);
            return getBooksByIds(similarBookIds);
        } else {
            logger.warn("No similar books found for ID: {}", id);
            return List.of();
        }
    }

}
