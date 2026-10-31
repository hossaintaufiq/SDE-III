SELECT
    (SELECT COUNT(*) FROM actor) AS actors,
    (SELECT COUNT(*) FROM film) AS films,
    (SELECT COUNT(*) FROM customer) AS customers,
    (SELECT COUNT(*) FROM rental) AS rentals,
    (SELECT COUNT(*) FROM payment) AS payments,
    (SELECT COUNT(*) FROM inventory) AS inventory;


SELECT
    f.film_id,
    f.title,
    f.release_year,
    f.rental_rate,
    c.name AS category
FROM film f
JOIN film_category fc
    ON f.film_id = fc.film_id
JOIN category c
    ON fc.category_id = c.category_id
ORDER BY f.title
LIMIT 10;


select * from actor; 


SELECT customer_id, amount , payment_date FROM payment; 

select distinct first_name from actor; 
select  first_name from actor; 

select * from film ; 

select distinct release_year from film ; 
select distinct (release_year) from film ; 

select distinct rental_rate from film; 


select count(distinct first_name) from customer; 

select count(*) from payment; 

select count(distinct amount) from payment; 



select * from customer 
where first_name = 'Mary'; 

SELECT count(*) FROM film
WHERE rental_rate>4 AND 
replacement_cost >= 19.99
AND rating = 'R'

SELECT * FROM film
WHERE rental_rate>4 AND 
replacement_cost >= 19.99
AND rating = 'R'


SELECT * from film 
where rating = 'PG-13' OR rating = 'R'

select title , replacement_cost from film 
where rating = 'PG-13' and release_year >= 2000


select title from film 
where rating = 'PG' and replacement_cost = 10.99


select title from film 
where release_year<2000 or replacement_cost < 10 


select * from customer 
ORDER BY first_name ; 

select * from payment 
where amount != 0 
order by payment_date 
limit 10 ; 



select count(*) from payment 
where amount  between 8 and 9  

select count(*) from payment 
where payment_date between '2007-01-15 %' and '2020-01-15 %'


select count(*) from payment 
where amount not IN (0.99 , 1.98, 1.99 )

select * from customer 
where first_name IN ( 'john', 'juli')


select * from customer 
where first_name like 'J%' and last_name like 'S%'


select customer_id,Sum(amount) from payment 
group by customer_id 
order by sum(amount)

select customer_id,staff_id, Sum(amount) from payment 
group by customer_id, staff_id
order by sum(amount) 


select date(payment_date), sum(amount) from payment
group by date(payment_date) 
order by sum(amount)


select first_name, last_name , email 
from customer 
join payment on (customer.customer_id= payment.customer_id)

