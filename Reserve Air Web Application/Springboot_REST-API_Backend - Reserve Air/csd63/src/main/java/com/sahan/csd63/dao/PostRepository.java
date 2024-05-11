package com.sahan.csd63.dao;

import com.sahan.csd63.model.Post;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

public interface PostRepository extends CrudRepository<Post,Integer> {

}
