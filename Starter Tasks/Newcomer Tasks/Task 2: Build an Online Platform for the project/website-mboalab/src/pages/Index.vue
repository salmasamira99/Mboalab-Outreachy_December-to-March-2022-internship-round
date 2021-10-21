<template>
  <Layout>
    <section id="container-centre" class="column centre flex-1">
      <h1 class="page-title">Welcome to Mboalab Project!</h1>
      <div class="content">
       
        <img width="95%" src="../assets/home_img.png">
        <br>
        <p>MboaLab is an open and collaborative space located in Yaoundé, Cameroon. The aim of MboaLab is to catalyse sustainable local development and improve people’s living conditions through open science.</p>
        <h2 class="text-3xl">Aim and missions</h2>
        <ul class="mb-12 list-disc pl-4">
          <li>provide community and lifelong education for the population, as well as formal education for the younger generations</li>
          <li>serve as a platform for exchanges on issues related to local context</li>
          <li>propose solutions that meet the needs of communities, using local knowledge and open digital technologies</li>
          <li>raise public awareness of environmental issues</li>
          <li>facilitate access to basic health care</li>
        <br>
        <img width="95%" src="../assets/child.jpeg">  
        <br>  
        </ul>
        <h2 class="text-3xl">Open Projects</h2>
        <h1 class="text-3xl">Project Description</h1>
        <p>Improve diagnostics of typhoid through Open Science: An Artificial Intelligence-based technique</p>
        <b>Context</b>
        <p>Typhoid or Enteric fever is one of the infectious human diseases in Cameroon and Africa. Outbreaks of typhoid fever caused by Salmonella typhi remains a serious health problem worldwide. There are a number of tests available presently, from molecular to immunological and biochemical to microbiological. Some well-known and conventional Method of Diagnosis of Typhoid Fever are :</p>
        <li><b>Microbiological cultures:</b>  The isolation of the causative organism, Salmonella enterica serovar Typhi (Salmonella Typhi), is the gold standard for the diagnosis (WHO, 2018). Body fluids like blood, bone marrow, stool, urine, rose spots, gastric and intestinal secretions may be cultured. Blood culture gives a definitive diagnosis. But, the use of bacteriological cultures for the diagnosis of typhoid infection is cost-intensive and technically difficult, hence the need for other diagnostic tests.</li>
        <li><b>Antibody detection tests:</b> These are rapid serologic tests designed for early and easy point-of-care use.  The Widal Test is based on the measurement of antibodies (agglutinins) against somatic (O) and flagellar (H) antigens of Salmonella typhi in the sera of patients. Widely used in many developing countries because of its low cost, Widal test is limited by lack of standardized methods of assay and misinterpretation of results. This has led to the overestimation of the number of patients presenting with acute febrile illnesses diagnosed with Typhoid fever. A systematic review by Mengist and Tilahun (2017) revealed poor reliability, low sensitivity and specificity of the Widal test.</li>
        <p>So, misdiagnosis is usually experienced since most health care facilities use only Widal test without confirmation of results with a second test method. In addition, the diagnosis of Typhoid involves several levels of uncertainties. Patients cannot tell exactly how they feel, doctors and nurses cannot tell exactly what they observe.</p>
        <b>Opportunities and solution</b>
        <p>Augmented intelligence makes more sense than artificial intelligence, especially in tropical diseases such as Typhoid. This is because it highlights the enhanced capabilities of a human when augmented with the right tools and technologies.In a sensitive industry such as healthcare, human intelligence cannot be replaced.  Augmented intelligence specifies systems that augment human intelligence rather than attempt to replace them. Combining AI systems with an irreplaceable human clinician can advance better diagnosis.

We propose to use the microcultures test with the blood which seems to be the best accepted by the laboratory technicians. We will use CNNs as algorithms on the collected images to train the algorithm. Everything will depend on the volume of images we have, if we have few we will use transfer learning to automate the test of microbiological cultures .As we saw above this test is reliable at 61% and to reinforce the reliability of this test we will use the second algorithm which is a fast decision tree learner. This algorithm based on 18 symptoma variables will allow us not only to confirm the diagnosis but above all to determine the level of severity of the disease. The main challenge our project is facing is availability of local and high quality open data.</p>
      </div>
      <h2 class="text-3xl">frequently asked questions(FAQ)</h2>
      <b>Typhoid fever facts:</b>
      <br>
      <img style="display: block; margin-left: auto; margin-right: auto; width: 50%;" width="45%" src="../assets/typhoid-fever.jpg">
      <br>
      <ul class="mb-12 list-disc pl-4">
      <li>Usually, Salmonellae typhi bacteria causes typhoid fever.</li>
      <li>People contract typhoid fever by ingesting contaminated food or water.</li>
      <li>Diagnosis of typhoid fever is made when the Salmonella bacteria is detected with a stool culture.</li>
      <li>Antibiotics treat typhoid fever.</li>
      <li>Typhoid fever symptoms are</li>
      <ul class="mb-12 list-disc pl-4">
      <li>poor appetite,</li>
      <li>headaches,</li>
      <li>diarrhea,</li>
      <li>generalized aches and pains,</li>
      <li>fever, and</li>
      <li>lethargy.</li>
      </ul>
      </ul>

    </section>
  </Layout>
</template>

<script>

export default {
  metaInfo: {
    title: "Home"
    }
};
</script>
