-- Create simple tables for testing
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='users' AND xtype='U')
BEGIN
    CREATE TABLE users (
        id INT IDENTITY(1,1) PRIMARY KEY,
        name NVARCHAR(100) NOT NULL,
        email NVARCHAR(255) UNIQUE NOT NULL,
        created_at DATETIME DEFAULT GETDATE()
    );
END

IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='messages' AND xtype='U')
BEGIN
    CREATE TABLE messages (
        id INT IDENTITY(1,1) PRIMARY KEY,
        user_id INT,
        content NVARCHAR(MAX),
        created_at DATETIME DEFAULT GETDATE(),
        FOREIGN KEY (user_id) REFERENCES users(id)
    );
END