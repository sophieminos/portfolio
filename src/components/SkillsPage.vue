<script setup>
import BaseLayout from "@/layouts/BaseLayout.vue";
</script>

<template>
  <BaseLayout>
    <!-- header -->
    <template #header>
      <!--<div>
        <h1>Skills</h1>
      </div>-->
    </template>

    <div class="page">
      <section class="skills-section">
        <h1>languages</h1>
        <ul class="skills-section-languages-list">
          <li class="skills-section-languages-item">
            <img src="@/assets/skills/french-flag.png" alt="French flag">
            <b>French - native</b>
            <div class="skills-section-languages-item-note">
              <img src="@/assets/skills/voltaire-logo.png" alt="voltaire">
              <span>Voltaire certificate: <a href="https://mon.certificat-voltaire.fr/verification-certificat?code=XRKEYUP" target="_blank">883</a></span>
            </div>
          </li>
          <li class="skills-section-languages-item">
            <img src="@/assets/skills/american-english-flag.png" alt="American English flag">
            <b>English - C2</b>
            <div class="skills-section-languages-item-note">
              <img src="@/assets/skills/ets-logo.png" alt="ets">
              <div>
                <div>TOEIC: ...</div>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section class="skills-section">
        <h1>technical skills</h1>

        <div class="skills-section-tech-items">

          <div class="skills-section-tech">
            <h2>Web development</h2>
            <ul class="skills-section-tech-list">
              <li>
                <img src="@/assets/skills/html-logo.png" alt="html">
                <div>HTML</div>
              </li>
              <li>
                <img src="@/assets/skills/css-logo.png" alt="css">
                <div>CSS</div>
              </li>
              <li>
                <img src="@/assets/skills/js-logo.png" alt="js">
                <div>JavaScript</div>
              </li>
              <li>
                <img src="@/assets/skills/jquery-logo.png" alt="jquery">
                <div>jQuery</div>
              </li>
              <li>
                <img src="@/assets/skills/django-logo.png" alt="django">
                <div>Django</div>
              </li>
              <li>
                <img src="@/assets/skills/php-logo.png" alt="php">
                <div>PHP</div>
              </li>
              <li>
                <img src="@/assets/skills/react-logo.png" alt="react">
                <div>React</div>
              </li>
              <li>
                <img src="@/assets/skills/angular-logo.png" alt="angular">
                <div>Angular</div>
              </li>
              <li>
                <img src="@/assets/skills/vue-js-logo.png" alt="vue js">
                <div>Vue JS</div>
              </li>
              <li>
                <img src="@/assets/skills/bootstrap-logo.png" alt="bootstrap">
                <div>Bootstrap</div>
              </li>
            </ul>
          </div>

          <div class="skills-section-tech">
            <h2>Mobile development</h2>
            <ul class="skills-section-tech-list">
              <li>
                <img src="@/assets/skills/react-logo.png" alt="react native">
                <div>React native</div>
              </li>
              <li>
                <img src="@/assets/skills/java-logo.png" alt="java">
                <div>Java</div>
              </li>
              <li>
                <img src="@/assets/skills/swiftui-logo.png" alt="swiftui">
                <div>Swiftui</div>
              </li>
            </ul>
          </div>

          <div class="skills-section-tech">
            <h2>Cloud computing</h2>
            <ul class="skills-section-tech-list">
              <li>
                <img src="@/assets/skills/docker-logo.png" alt="docker">
                <div>Docker</div>
              </li>
              <li>
                <img src="@/assets/skills/kubernetes-logo.png" alt="kubernetes">
                <div>Kubernetes in Minikube</div>
              </li>
              <li>
                <img src="@/assets/skills/grafana-logo.png" alt="grafana">
                <div>Monitoring in Grafana <br>(Prometheus & Loki)</div>
              </li>
            </ul>
          </div>

          <div class="skills-section-tech">
            <h2>Software development</h2>
            <ul class="skills-section-tech-list">
              <li>
                <img src="@/assets/skills/java-logo.png" alt="java">
                <div>Java</div>
              </li>
              <li>
                <img src="@/assets/skills/c-logo.png" alt="c">
                <div>C</div>
              </li>
              <li>
                <img src="@/assets/skills/cpp-logo.png" alt="c++">
                <div>C++</div>
              </li>
              <li>
                <img src="@/assets/skills/python-logo.png" alt="python">
                <div>Python</div>
              </li>
              <li>
                <img src="@/assets/skills/linux-logo.png" alt="linux">
                <div>Linux</div>
              </li>
            </ul>
          </div>

          <div class="skills-section-tech">
            <h2>Data structuring</h2>
            <ul class="skills-section-tech-list">
              <li>
                <img src="@/assets/skills/json-logo.png" alt="json">
                <div>JSON</div>
              </li>
              <li>
                <img src="@/assets/skills/xml-logo.png" alt="xml">
                <div>XML</div>
              </li>
              <li>
                <img src="@/assets/skills/yaml-logo.png" alt="yaml">
                <div>YAML</div>
              </li>
            </ul>
          </div>

          <div class="skills-section-tech">
            <h2>Representation</h2>
            <ul class="skills-section-tech-list">
              <li>
                <img src="@/assets/skills/figma-logo.png" alt="figma">
                <div>Figma</div>
              </li>
              <li>
                <img src="@/assets/skills/UCD.png" alt="use case diagram">
                <div>Use Case diagram</div>
              </li>
              <li>
                <img src="@/assets/skills/CDM.png" alt="conceptual data model">
                <div>Conceptual Data Model (CDM)</div>
              </li>
              <li>
                <img src="@/assets/skills/LDM.png" alt="logical data model">
                <div>Logical Data Model (LDM)</div>
              </li>
              <li>
                <img src="@/assets/skills/CD.png" alt="class diagram">
                <div>Class diagram</div>
              </li>
              <li>
                <div>State Transition diagram</div>
              </li>
              <li>
                <img src="@/assets/skills/SD.png" alt="sequence diagram">
                <div>Sequence diagram</div>
              </li>
              <li>
                <div>Activity diagram</div>
              </li>
            </ul>
          </div>

          <div class="skills-section-tech">
            <h2>Databases</h2>
            <table class="portfolio-table bordered-portfolio-table">
              <thead>
                <tr>
                  <th>Langage</th>
                  <th>Software</th>
                  <th>Skills</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SQL</td>
                  <td>
                    <ul class="skills-section-tech-list">
                      <li><img src="@/assets/skills/azure-logo.png" alt="azure"></li>
                      <li><img src="@/assets/skills/oracle-logo.png" alt="oracle"></li>
                    </ul>
                  </td>
                  <td>
                    <ul class="skills-section-tech-list">
                      <li>
                        <div>Data Definition Language<br>(<b>DDL</b>)</div>
                      </li>
                      <li>
                        <div>Data Query Language<br>(<b>DQL</b>)</div>
                      </li>
                      <li>
                        <div>Data Manipulation Language<br>(<b>DML</b>)</div>
                      </li>
                      <li>
                        <div>Data Control Language<br>(<b>DCL</b>)</div>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td rowspan="2">NoSQL</td>
                  <td>
                    <ul class="skills-section-tech-list">
                      <li><img src="@/assets/skills/elastic-logo.png" alt="elastic"></li>
                    </ul>
                  </td>
                  <td>
                    <ul class="skills-section-tech-list">
                      <li>
                        <div>Selection and filtering of savings</div>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>
                    <ul class="skills-section-tech-list">
                      <li><img src="@/assets/skills/firebase-logo.png" alt="firebase"></li>
                    </ul>
                  </td>
                  <td>
                    <ul class="skills-section-tech-list">
                      <li>
                        <div>Data selection and update from a React Native app</div>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        
        </div>
      </section>
    </div>
  </BaseLayout>

</template>

<style scoped>
.skills-section-tech .portfolio-table th {
  text-align: center;
}
.skills-section-tech .portfolio-table .skills-section-tech-list {
  gap: 10%;
  margin: 0;
}
.skills-section-tech .portfolio-table .skills-section-tech-list li {
  width: 25%;
}
.skills-section-tech .portfolio-table .skills-section-tech-list img {
  width: 80px;
  display: block;
}
.skills-section-tech img {
  width: auto;
  /*height: 40px;*/
}
</style>