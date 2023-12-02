import React from "react";
import { AnchorLink, InlineLink } from "../components/links/link";
import CellDropdown from "../components/dropdown/dropdown";

// The constant values below represent the webpage's textual content.
const INTRO_T = `
A vascular disease that typically affects the circulatory system and is characterised by 
abnormalities in the blood vessels – arteries, capillaries and veins. It is characterized by inflammation of the large and 
medium-sized arteries that supply blood to the head, predominantly the temporal arteries
located on the sides of the head. It is most common in patients between ages 60-70.
It is also known as giant cell arteritis (GCA).
`;

const OBJECTIVE = `
The objective of the research was to compare the cell types represented
in diseased temporal artery tissues and determine what cell type(s) are most likely to play a huge role in 
the diseased state of Temporal Arteritis.
`;

const INTRO_P = `
The research objective was achieved by obtaining a suitable dataset and subsequent processing.
`;

const DATASET = `
Temporal arterial tissues were donated by 6 patients. This included three (3) diseased arterial 
tissues and three (3) healthy arterial tissues. The dataset was obtained by conducting single-cell
RNA sequencing (scRNA-seq) of cells and genes in the donated arterial tissues. 
`;

const VIOLIN_CHART = `In the violin chart below, we see the various types of cells arrayed in the horizontal
axis, and the genes they are made up of, occupying the vertical axis.`;

const PROCESS_FACTORS = `
To effectively streamline the data for further analysis, statistical outliers were taken out by applying filters such as:
`;
const PROCESS_TOOLS = `
was used to observe the genes in both disease and control cells. UMAPS (Uniform Manifold Approximation and Projection)
is a dimensionality reduction technique commonly used in single-cell RNA sequencing (scRNA-seq) analysis and genomics. It compresses 
datasets in a form that allows easy represention in 2D latent space. This includes complex relationships within the dataset.
`;

const CELL_STATUS = `After further processing, the UMAPS was able to separate the cluster of cells and genes in the dataset
into individual cell types with their genes. The individual cell types shows the diseased (neg) and healthy (pos) genes overlapped to 
showcase which cell type has a higher likelihood of influencing the diseased state of the temporal artery.`;

const CLUSTERS = `
The UMAPS presented the entire dataset as a cluster of cell types with their genes. 
`;

const CONCLUSION = ` 
From the analysis of the dataset, the Immune, VSMC-1 and Fibroplast-1 cell types are more likely to play a huge role in the diseased state of the temporal artery.
Understanding the visualized results will help in utilizing scRNA-seq analysis in many real-world medical practices including:

`;

// The function below represents the division of the webpage: Sidebar and Main content
export default function Home() {
  return (
    <div className="root">
      {/* The code below represents the sidebar which are Anchor links that helps navigate through the page */}
      <div className="sidebar">
        <AnchorLink to={"#section-1"}>
          Introduction to the Disease Study
        </AnchorLink>
        <AnchorLink to={"#section-2"}>Dataset and Data Processing</AnchorLink>
        <AnchorLink to={"#section-3"}>Visual Insights</AnchorLink>
        <AnchorLink to={"#section-4"}>Conclusion</AnchorLink>
        <AnchorLink to={"#section-5"}>More</AnchorLink>
      </div>
      {/* The code below represents the main content of the webpage */}
      <main className="main-content">
        {/* code for Section-1 : Intro to disease study */}
        <div>
          <h2 id="section-1">Introduction to the Disease Study</h2>
          <h3> Objective </h3>
          <p> {OBJECTIVE} </p>
          <h3> Temporal Arteritis </h3>
          <p> {INTRO_T} </p>
        </div>

        {/* code for Section-2 : Dataset and data processing */}
        <div>
          <h2 id="section-2"> Dataset and Data Processing</h2>
          <p> {INTRO_P} </p>
          <h3> The Dataset </h3>
          <p>{DATASET}</p>
          <p>
            From the dataset obtained by{" "}
            <InlineLink to="https://www.10xgenomics.com/products/single-cell-gene-expression?gad_source=1&gclid=CjwKCAiApaarBhB7EiwAYiMwqkEwPIf4ihGikNu5heTkWVVzyFSLOrA-337I3hQOcWHPkbjDeF2I7xoC3G0QAvD_BwE&gclsrc=aw.ds">
              Single Cell Sequencing
            </InlineLink>
            , there are Ten (10) cell types which make up the temporal artery
            tissue. These include:
          </p>
          <div>
            <ul>
              <li>Cell type 0: Immune </li>
              <li>Cell type 1: Vascular smooth muscle cell 1</li>
              <li>Cell type 2: Endothelial 1</li>
              <li>Cell type 3: Endothelial 2</li>
              <li>Cell type 4: Neuronal</li>
              <li>Cell type 5: Vascular smooth muscle cell 2</li>
              <li>Cell type 6: Macrophage</li>
              <li>Cell type 7: Endothelial cells 3</li>
              <li>Cell type 8: Fibroblast 1</li>
              <li>Cell type 9: Fibroblast 2</li>
            </ul>
          </div>
          <p>{VIOLIN_CHART}</p>
          <img src="./Filter.png" alt="cells and genes in a violin chart" />
          <h3> Data Processing </h3>
          <p>{PROCESS_FACTORS} </p>
          <div>
            <ul>
              <li>Values with less than 200 genes per cell type.</li>
              <li>Values greater than the 99.7th percentile.</li>
              <li>Gene and read counts. </li>
              <li>
                Values that have a 0.2% or 5% increase of{" "}
                <InlineLink to="https://www.genome.gov/genetics-glossary/Mitochondrial-DNA#:~:text=Mitochondrial%20DNA%20is%20the%20circular,mitochondrial%20DNA%20%E2%80%94%20from%20their%20mother.">
                  mtDNA
                </InlineLink>
                .
              </li>
            </ul>
          </div>
          <img
            src="./Pre-post filter.png"
            alt="cell numbers before and after filtering"
          />
        </div>

{/* code for section 3- Visual Insights */}
        <div>
          <h2 id="section-3"> Visual Insights</h2>
          <p>
            <InlineLink to="https://umap-learn.readthedocs.io/en/latest/">
              {" "}
              UMAPS{" "}
            </InlineLink>
            {PROCESS_TOOLS}
          </p>
          <h3> Cell Clusters </h3>
          <p>{CLUSTERS}</p>
          <img
            src="./cell_cluster.png"
            alt="cell clusters generated by the UMAP"
          />
          <h3>Disease-Control Status of Cells</h3>
          <p>
            This UMAP graph represents the cluster of cell types, highlighting
            only their diseased (neg) and healthy (pos) genes for the entire
            dataset.{" "}
          </p>
          <img
            src="./Disease-control_cluster.png"
            alt="Disease-control cell clusters generated by the UMAP"
          />
          <p>{CELL_STATUS}</p>
          <div className={"cell-dropdown"}>
            <CellDropdown />
          </div>
        </div>

{/* code for section 4- Conclusion */}
        <div>
          <h2 id="section-4">Conclusion</h2>
          <p>{CONCLUSION}</p>
          <div>
            <ul>
              <li>
                Understanding complex biological processes at the single-cell
                level.
              </li>
              <li>Identifying potential therapeutic targets.</li>
              <li>Personalized medicine applications.</li>
              <li>Biomarker discovery for disease diagnosis and prognosis.</li>
            </ul>
          </div>
        </div>

{/* code for section 5- More */}
        <div>
          <h2 id="section-5">More</h2>
          <p>
            To view the code utilized to obtain the visual insights,{" "}
            <InlineLink to="https://github.com/EllaFamakin/SEURAT-Data-Process.git">click here</InlineLink>
          </p>
        </div>
      </main>
    </div>
  );
}
