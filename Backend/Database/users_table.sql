-- Migrate:UP
-- creating custom enum types 
CREATE TYPE project_status AS ENUM('active', 'completed', 'archived')
CREATE TYPE task_status AS ENUM ('pending', 'in_progress',  'completed', 'cancelled')
CREATE TYPE member_role AS ENUM('owner', 'admin', 'member')


-- create useres table (snake case writing)
CREATE TABLE users(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(), 
    email TEXT NOT NULL UNIQUE, 
    full_name  TEXT NOT NULL, 
    password_hash TEXT NOT NULL, 
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP, 
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRNET_TIMESTAMP
)

-- crete user profile 
CREATE user_profiles(
    user_id UUID PRIMARY KEY REFERENCES users ON DELETE CASCADE , 
    avatar_url TEXT, 
    bio TEXT , 
    phone TEXT , 
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP, 
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRNET_TIMESTAMP
)

-- migration: down 
DROP TABLE IF EXISTS project_members; 
DROP TABLE IF EXISTS tasks;  
DROP TABLE IF EXISTS projects; 
DROP TABLE IF EXISTS user_profiles; 

-- Drop enum types 
DROP TYPE IF EXISTS member_role; 
DROP TYPE IF EXISTS task_status; 
DROP TYPE IF EXISTS project_status; 

