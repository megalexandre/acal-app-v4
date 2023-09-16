export interface Dataset {
  label: string,
  data: number[]
}

export interface Datasets {
  labels: string[],
  datasets: Dataset[]
}
