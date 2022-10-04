docker build -t file-system-frontend -f docker/Dockerfile.dev .

docker run -p 3000:3000 file-system-frontend