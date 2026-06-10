const projectImage = (fileName: string): string =>
  `/images/projet/optimized/${fileName}.webp`;

export const PROJECT_IMAGES = {
  'al-saad': {
    primary: projectImage('al-saad-apartments-01'),
    gallery: [
      projectImage('al-saad-apartments-02'),
      projectImage('al-saad-apartments-03'),
      projectImage('al-saad-apartments-04'),
      projectImage('al-saad-apartments-05'),
      projectImage('al-saad-apartments-06'),
      projectImage('al-saad-apartments-07'),
      projectImage('al-saad-apartments-08'),
    ],
  },
  'kiwengwa-hotel': {
    primary: projectImage('kiwengwa-hotel-01'),
    gallery: [
      projectImage('kiwengwa-hotel-02'),
      projectImage('kiwengwa-hotel-03'),
      projectImage('kiwengwa-hotel-04'),
      projectImage('kiwengwa-hotel-05'),
      projectImage('kiwengwa-hotel-06'),
      projectImage('kiwengwa-hotel-07'),
      projectImage('kiwengwa-hotel-08'),
    ],
  },
  'kisraa-godowns': {
    primary: projectImage('kisraa-godowns-01'),
    gallery: [
      projectImage('kisraa-godowns-02'),
      projectImage('kisraa-godowns-03'),
      projectImage('kisraa-godowns-04'),
      projectImage('kisraa-godowns-05'),
      projectImage('kisraa-godowns-06'),
      projectImage('kisraa-godowns-07'),
      projectImage('kisraa-godowns-08'),
    ],
  },
  'mbweni-jkt': {
    primary: projectImage('mbweni-jkt-villa-01'),
    gallery: [
      projectImage('mbweni-jkt-villa-02'),
      projectImage('mbweni-jkt-villa-03'),
      projectImage('mbweni-jkt-villa-04'),
      projectImage('mbweni-jkt-villa-05'),
      projectImage('mbweni-jkt-villa-06'),
      projectImage('mbweni-jkt-villa-07'),
      projectImage('mbweni-jkt-villa-08'),
    ],
  },
  'lake-energies': {
    primary: projectImage('lake-energies-01'),
    gallery: [
      projectImage('lake-energies-02'),
      projectImage('lake-energies-03'),
      projectImage('lake-energies-04'),
      projectImage('lake-energies-05'),
      projectImage('lake-energies-06'),
      projectImage('lake-energies-07'),
    ],
  },
  'hospitaux-znz': {
    primary: projectImage('zanzibar-district-hospitals-01'),
    gallery: [
      projectImage('zanzibar-district-hospitals-02'),
      projectImage('zanzibar-district-hospitals-03'),
    ],
  },
  'palm-complex': {
    primary: projectImage('palm-complex-kigamboni-01'),
    gallery: [
      projectImage('palm-complex-kigamboni-02'),
      projectImage('palm-complex-kigamboni-03'),
    ],
  },
} as const satisfies Record<
  string,
  { readonly primary: string; readonly gallery: readonly string[] }
>;
