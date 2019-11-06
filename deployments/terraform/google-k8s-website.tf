data "template_file" "website_values" {
  template = "${file("website/values_template.yaml")}"

  vars {
    deployment_endpoint = "${lookup(var.deployment_endpoint, "${var.deployment_environment}")}"
    deployment_image    = "${var.deployment_image}"
  }
}

resource "local_file" "website_helm_chart_values" {
  content  = "${trimspace(data.template_file.website_values.rendered)}"
  filename = "website/.cache/website_values.yaml"
}

resource "helm_release" "helm_website_fuchicorp" {
  depends_on = [
    "helm_release.ingress_controller",
    "kubernetes_deployment.vault_fuchicorp_deployment",
    "kubernetes_deployment.nexus_fuchicorp_deployment",
    "kubernetes_service.vault_fuchicorp_service",
    "kubernetes_service.nexus_fuchicorp_service",
  ]

  values = [
    "${data.template_file.website_values.rendered}",
  ]

  name      = "website-fuchicorp"
  namespace = "${var.deployment_environment}"
  chart     = "./helm-website/website"
}
