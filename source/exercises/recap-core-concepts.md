---
title: Recap Core Concepts
description: PODS, ReplicaSets, Deployments, Namespaces
---

### PODs

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
spec:
  containers:
  - name: nginx
    image: nginx:1.7.9
```

And then...

```bash
$ kubectl apply -f <(cat <<EOF
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
spec:
  containers:
  - name: nginx
    image: nginx:1.7.9
EOF)
```

> Note: there's a shorthand for this:

```bash
$ kubectl run nginx --image=nginx --generator=run-pod/v1
```

### ReplicaSets

```bash
$ kubectl get replicaset
```

<code>
NAME              DESIRED   CURRENT   READY   AGE

new-replica-set   4         4         0       5m17s
</code>

#### Deleting a pod

```bash
$ kubectl delete pod new-replica-set-2jn6r
```

#### Exercise 1

```diff
- apiVersion: v1
+ apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: replicaset-1
spec:
  replicas: 2
  selector:
    matchLabels:
      tier: frontend
  template:
    metadata:
      labels:
        tier: frontend
    spec:
      containers:
      - name: nginx
        image: nginx
```

#### Exercise 2

```diff
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: replicaset-1
spec:
  replicas: 2
  selector:
    matchLabels:
      tier: frontend
  template:
    metadata:
      labels:
-        tier: frontend
+        tier: nginx
    spec:
      containers:
      - name: nginx
        image: nginx
```

```bash
$ kubectl delete replicaset replicaset-{1,2}
```

Editing an existing replicaset online:

```bash
$ kubectl edit replicaset new-replica-set
```

or better yet:

```bash
$ kubectl get rs new-replica-set > /tmp/replicaset.yml
```

which should get the replicaset with the problematic image.

## Replication Controller vs Replica Sets

### Replication Controller

```yaml
apiVersion: v1
kind: ReplicationController
metadata:
  name: myapp-rc
  labels:
    app: myapp
    type: front-end
spec:
  template:
    metadata:
      labels:
        name: myapp-pod
        type: front-end
    spec:
      containers:
      - name: nginx-container
        image: nginx
  replicas: 3
```

### Replica Set

```yaml
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: myapp-replicaset
  labels:
    app: myapp
    type: front-end
spec:
  template:
    metadata:
      name: myapp-pod
      labels:
        name: myapp
        type: front-end
    spec:
      containers:
      - name: nginx-container
        image: nginx
  replicas: 3
  selector:
    matchLabels:
      type: front-end
```

### Deployments

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp-replicaset
  labels:
    app: myapp
    type: front-end
spec:
  template:
    metadata:
      name: myapp-pod
      labels:
        name: myapp
        type: front-end
    spec:
      containers:
      - name: nginx-container
        image: nginx
  replicas: 3
  selector:
    matchLabels:
      type: front-end
```

#### See everything at once:

```bash
$ kubectl get all
```

### Cheatsheets

https://kubernetes.io/docs/reference/kubectl/cheatsheet/
https://github.com/dennyzhang/cheatsheet-kubernetes-A4