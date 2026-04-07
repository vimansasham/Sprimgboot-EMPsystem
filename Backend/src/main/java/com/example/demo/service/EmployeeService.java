// package com.example.demo.service;

// import com.example.demo.model.Employee;
// import com.example.demo.repository.EmployeeRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;
// import java.util.List; 

// @Service
// public class EmployeeService {

//     @Autowired
//     private EmployeeRepository repo;

//     public Employee create(Employee emp) { return repo.save(emp); }
//     public List<Employee> getAll() { return repo.findAll(); }
//     public Employee getById(Long id) { return repo.findById(id).orElse(null); }
//     public Employee update(Long id, Employee emp) {
//         Employee existing = repo.findById(id).orElse(null);
//         if (existing != null) {
//             existing.setName(emp.getName());
//             existing.setEmail(emp.getEmail());
//             existing.setSalary(emp.getSalary());
//             return repo.save(existing);
//         }
//         return null;
//     }
//     public void delete(Long id) { repo.deleteById(id); }
//     public List<Employee> getHighSalary(double amount) { return repo.findBySalaryGreaterThan(amount); }
// }