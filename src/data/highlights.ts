export interface HighlightLink {
  href: string;
  label: string;
}

export interface HighlightItem {
  date: string;
  title: string;
  subtitle: string;
  summary: string;
  tags?: string[];
  links?: HighlightLink[];
}

export const newsItems: HighlightItem[] = [
  {
    date: 'Spring 2026',
    title: 'Lensless imaging final project received Best Technical Project Award',
    subtitle: 'UC Irvine / EECS298 Computational Optics',
    summary: '',
    tags: ['Lensless Imaging', 'Flow Matching'],
    links: [
      { href: '/projects/lensless-flow/', label: 'Project page' },
      { href: 'https://github.com/Charley-xiao/lensless-flow', label: 'Repository' }
    ]
  },
  // {
  //   date: 'Winter 2026',
  //   title: 'Started HPC kernel research at HPC Forge',
  //   subtitle: 'UC Irvine / Undergraduate Research',
  //   summary:
  //     'Began studying fused W4A16 INT4 weight-only GEMM in Triton for LLM inference, with implementations and benchmarks spanning decode and prefill regimes.',
  //   tags: ['HPC', 'Triton', 'LLM Inference'],
  //   links: [{ href: '/research/hpc-forge/', label: 'Research page' }]
  // },
  // {
  //   date: 'Fall 2025',
  //   title: 'Joined the Computer Vision Lab at UC Irvine',
  //   subtitle: 'UC Irvine / Undergraduate Research',
  //   summary:
  //     'Started remote sensing research on vegetation water thickness estimation using spectral modeling, XGBoost, and Levenberg-Marquardt optimization.',
  //   tags: ['Remote Sensing', 'XGBoost'],
  //   links: [{ href: '/research/computer-vision-lab/', label: 'Research page' }]
  // },
  // {
  //   date: 'Fall 2024',
  //   title: 'Began first-author StyleMeta research',
  //   subtitle: 'Shenzhen MSU-BIT University / AI Research Institute',
  //   summary:
  //     'Started developing StyleMeta, a meta network that combines flow matching with dynamic parameter generation for efficient multi-style graphical layout generation.',
  //   tags: ['Flow Matching', 'Layout Generation'],
  //   links: [{ href: '/research/stylemeta-msu-bit/', label: 'Research page' }]
  // }
];

export const publicationItems: HighlightItem[] = [
  // {
  //   date: '2026',
  //   title: 'StyleMeta: Meta Network for Multi-Style Graphical Layout Generation',
  //   subtitle: 'Under review / ICWS 2026',
  //   summary:
  //     'First-author work on efficient multi-style graphical layout generation using a meta network with flow matching and dynamic parameter generation.',
  //   tags: ['Flow Matching', 'Meta Networks', 'Layout Generation'],
  //   links: [{ href: '/research/stylemeta-msu-bit/', label: 'Research page' }]
  // },
  // {
  //   date: '2025',
  //   title: 'ODE Samplers for Rectified Flow Generative Models',
  //   subtitle: 'Technical report / UC Irvine CS274E',
  //   summary:
  //     'A comparative study of six ODE solvers for rectified flow on EuroSAT, with analysis of quality, runtime, and trajectory behavior.',
  //   tags: ['Rectified Flow', 'ODE Solvers', 'Generative Models'],
  //   links: [
  //     { href: '/projects/ode-samplers-rectified-flow/', label: 'Project page' },
  //     { href: '/reports/ode-samplers-rectified-flow-report.pdf', label: 'Report' },
  //     { href: 'https://github.com/Charley-xiao/cs274e-project', label: 'Repository' }
  //   ]
  // },
  // {
  //   date: '2024',
  //   title: 'Explainable Writing Style Detection',
  //   subtitle: 'Technical report / UC Davis ECS171',
  //   summary:
  //     'An interpretable authorship attribution system that combines fastText with SHAP and LIME to make predictions understandable to end users.',
  //   tags: ['NLP', 'Explainability', 'Authorship Attribution'],
  //   links: [
  //     { href: '/projects/explainable-writing-style-detection/', label: 'Project page' },
  //     { href: '/reports/ecs171-writing-style-report.pdf', label: 'Report' },
  //     { href: 'https://github.com/Charley-xiao/ecs171-project', label: 'Repository' }
  //   ]
  // }
];

export const awardItems: HighlightItem[] = [
  {
    date: '2026',
    title: 'Best Technical Project Award',
    subtitle: 'UC Irvine / EECS298 Computational Optics',
    summary:
      'Received for the lensless imaging final project on physics-guided conditional flow matching for diffuser-based reconstruction.',
    tags: ['Lensless Imaging', 'Final Project'],
    links: [{ href: '/projects/lensless-flow/', label: 'Project page' }]
  },
  {
    date: '2024',
    title: 'Second Prize, Asian Supercomputing Challenge',
    subtitle: 'ASC 2024',
    summary:
      'Received second prize as part of the SUSTech supercomputing team in the 2024 Asian Supercomputing Challenge.',
    tags: ['Supercomputing', 'HPC', 'Competition'],
    links: [{ href: '/research/sustech-supercomputing/', label: 'Research page' }]
  },
  {
    date: '2024, 2023',
    title: 'Grand Prize, National English Competition for College Students',
    subtitle: 'NECCS',
    summary:
      'Earned the Grand Prize in the National English Competition for College Students in both 2023 and 2024.',
    tags: ['Competition', 'National Award']
  },
  {
    date: '2023',
    title: 'Second Prize, The 2nd SUSTech Quantitative Trading Competition',
    subtitle: 'SUSTech',
    summary:
      'Placed second in the 2nd SUSTech Quantitative Trading Competition through model-driven quantitative analysis and trading strategy work.',
    tags: ['Quantitative Finance', 'Competition']
  },
  {
    date: '2020, 2019',
    title: 'Second Prize, National Olympiad for Informatics (Provincial)',
    subtitle: 'NOI Provincial',
    summary:
      'Won provincial second prize in the National Olympiad for Informatics in both 2019 and 2020.',
    tags: ['Algorithms', 'Olympiad for Informatics', 'Competition']
  }
];
