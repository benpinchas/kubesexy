const k8s = require('@kubernetes/client-node');

const kc = new k8s.KubeConfig();

kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);




const main = async () => {
    const res = await k8sApi.listNamespacedPod('my-namespace')

    console.log("res", res)
}


main()