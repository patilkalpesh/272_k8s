# Kubernetes



<img width="699" height="400" alt="Screenshot 2024-10-20 at 2 44 40 AM" src="https://github.com/user-attachments/assets/6434971e-2c89-457c-a91d-57706d3b524b">

<img width="699" alt="Screenshot 2024-10-20 at 12 41 47 AM" src="https://github.com/user-attachments/assets/ab9796d1-10d4-47da-92dd-d98d28553da8">

<img width="699" alt="Screenshot 2024-10-20 at 1 36 55 AM" src="https://github.com/user-attachments/assets/f672d531-3d95-4147-8764-aab3a8a9de79">

<img width="699" alt="Screenshot 2024-10-20 at 1 34 39 AM" src="https://github.com/user-attachments/assets/757cfae2-5175-4c62-8b93-4217fa1cd777">

<img width="699" alt="Screenshot 2024-10-20 at 1 35 40 AM" src="https://github.com/user-attachments/assets/2fc5de66-92ad-4317-a916-bc67aa37d47a">



-----
Built image from the source code. Before building I changed the docker context to minikube using `eval $(minikube docker-env)` So that images are accessible within minikube

Frontend 
`docker build -t Kalpesh/customfrontent:0.0.1 .`

Backend
`docker build -t Kalpesh/customfrontent:0.0.1 .`

Created k8s deployment files for Frontend and Backend and set image pull policy to never because images were built locally 

Added NodePort service so that frontend is accessible via localhost browser (It is defined in frontend-deployment.yaml file)

`kubectl apply -f backend-deployment.yaml`
`kubectl apply -f frontend-deployment.yaml` 

To access frontend service via localhost I ran 
minikube service frontend-service –url
-> http://127.0.0.1:60181

We can visit  http://127.0.0.1:60181 to access the frontend

