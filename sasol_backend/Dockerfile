FROM python:3.10

ENV PYTHONUNBUFFERD=1

WORKDIR /app

COPY . .

RUN pip install django

RUN pip install djangorestframework

RUN pip install psycopg2

RUN pip install django-cors-headers

RUN pip install django_filter

RUN python manage.py makemigrations  sasol_api

RUN python manage.py migrate

EXPOSE 8000

CMD ["python", "manage.py", "runserver"]

