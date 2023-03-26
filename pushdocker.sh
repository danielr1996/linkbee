docker build -t ghcr.io/danielr1996/linkbee-frontend ./frontend/
docker push ghcr.io/danielr1996/linkbee-frontend
docker build -t ghcr.io/danielr1996/linkbee-backend ./backend/
docker push ghcr.io/danielr1996/linkbee-backend
