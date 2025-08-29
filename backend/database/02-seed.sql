-- Insert test data
IF NOT EXISTS (SELECT * FROM users WHERE email = 'admin@test.com')
BEGIN
    INSERT INTO users (name, email) VALUES ('Admin User', 'admin@test.com');
END

IF NOT EXISTS (SELECT * FROM users WHERE email = 'user@test.com')
BEGIN
    INSERT INTO users (name, email) VALUES ('Test User', 'user@test.com');
END