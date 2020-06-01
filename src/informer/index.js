const k8s = require('@kubernetes/client-node')

const kc = new k8s.KubeConfig()
kc.loadFromDefault()

const k8sApi = kc.makeApiClient(k8s.CoreV1Api)

const informer = k8s.makeInformer(kc, '/api/v1/pods', () => {
  return k8sApi.listPodForAllNamespaces()
})

informer.on('add', console.log)
informer.on('update', console.log)
informer.on('delete', console.log)

informer.start()
