# sasol_test

Dependenncies:

  - postgres db runing on port 5432
  - python installed
  - psql

cd into sasol_backend:

run the following comands: 

  - pip install django

  - pip install djangorestframework

  - pip install psycopg2

  - pip install django-cors-headers

  - pip install django_filter

  - python manage.py makemigrations  sasol_api

  - python manage.py migrate

  - python manage.py runserver

we can now add data by executing: 
  - psql postgres
  
  and we can add the data from db/db.sql file
  
finally we run docker-compose up to have the frontend ready and listen on:  http://localhost:3000
