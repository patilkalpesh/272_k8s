# Use Python image
FROM python:3.9-slim

# Set working directory
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose port 5001
EXPOSE 5001

# Run the application
CMD ["python", "app.py"]
