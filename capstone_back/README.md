# Journalista API
an API for our journlist community using node, express, and postgresql

# Postgres Setup

Postgres should be installed and working at port 5432.

Login as postgres user

    sudo -u postgres psql ## on mac or linux

    or 

    psql -U postgres ## on windows

Initialize Database

    CREATE DATABASE journalista;

Show all databases to confirm

    \l

## Getting Started
Install Packages

    npm i

Seed Database

    npm run seed    
    
Start Server

    npm run start:dev
