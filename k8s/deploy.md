# Deploy on GKE


## Create a Kubernetes Cluster

Create a standard GKE cluster.

## Setup the secrets

```bash
cp k8s/back/back.secret.yaml.example k8s/back/back.secret.yaml
cp k8s/front/front.secret.yaml.example k8s/front/front.secret.yaml
cp k8s/postgres/postgres.secret.yaml.example k8s/postgres/postgres.secret.yaml
```

Edit the files to have the secrets needed encoded in base64.

## Create Static LoadBalancer IP address
```bash
gcloud compute addresses create kayo-front--ip --region europe-west1
gcloud compute addresses create kayo-back--ip --region europe-west1

# get the adress with describe
gcloud compute addresses describe kayo-back--ip --region europe-west1
gcloud compute addresses describe kayo-front--ip --region europe-west1
```

## Create the postgres deployment service configmap and secret

```bash
kubectl apply -f k8s/postgres/
```

## Create the front deployment service configmap and secret

```bash
kubectl apply -f k8s/front/
```

## Create the back deployment service configmap and secret

```bash
kubectl apply -f k8s/back/
```

