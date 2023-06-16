package com.shoppingapplictionfinal.ShoppingApplicationsys.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shoppingapplictionfinal.ShoppingApplicationsys.model.Product;
public interface ProductDao extends JpaRepository<Product,Long>{

}
