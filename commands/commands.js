const projectID = "muvirtua";
const region = "us-central1";
const clusterName = "auto-cluster";
const imgVersion = ""; //":0.0.1.RELEASE"
const containerImagePath = `juliocnsouza/hello-world-rest-api${imgVersion}`;
const deploymentName = "hello-world-rest-api";
const exposeType = "LoadBalancer";
const exposePort = "8080";
const autoScaleMax = "10";
const autoScaleCpuMinPercentage = "70";

const commands = {
    createAutoPilotCluster: `gcloud container clusters create-auto ${clusterName} --region ${region} --project=${projectID} --record`,
    getClusterCredentials: `gcloud container clusters get-credentials ${clusterName} --region ${region} --project=${projectID}`,
    createDeployment: `kubectl create deployment ${deploymentName} --image=${containerImagePath}`,
    exposeDeployment: `kubectl expose deployment ${deploymentName} --type=${exposeType} --port=${exposePort}`,
    autoScale: `kubectl autoscale deployment ${deploymentName} --max=${autoScaleMax} --cpu-percent=${autoScaleCpuMinPercentage}`,
    setNewImage: `kubectl set image deployment ${deploymentName} ${containerImagePath} --record`,
    deleteCluster: `gcloud container clusters delete ${clusterName} --region ${region}`,
};
