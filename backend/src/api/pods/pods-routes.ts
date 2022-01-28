import { NextFunction, Request, Response, Router } from "express";

const router = Router();

const k8s = require('@kubernetes/client-node');


router.get("/", async (req: Request, res: Response) => {

    const kc = new k8s.KubeConfig();

    kc.loadFromDefault();

    const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

    k8sApi.listNamespacedPod('default').then((res) => {
        console.log(res.body);
    });



    res.status(200).send([])
})