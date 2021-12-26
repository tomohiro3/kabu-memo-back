FROM mysql:8.0

RUN mkdir /var/log/mysql \
 && chown -R mysql:mysql /var/log/mysql \
 && touch /var/log/mysql/mysqld.log

COPY ./my.cnf /etc/mysql/conf.d/