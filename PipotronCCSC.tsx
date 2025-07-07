'use client';

import { useState } from 'react';

export default function PipotronCCSC() {
  const sujets = [
    "La direction du CCSC", "Le comité de gouvernance opérationnelle", "La cellule de répartition stratégique",
    "Le centre d’excellence", "Le conseil d’administration", "Le dispositif d’intervention priorisé",
    "L’équipe de coordination clinique", "La trajectoire d’optimisation territoriale",
    "Le levier préhospitalier unifié", "La gouvernance populationnelle interrégionale"
  ];

  const verbes = [
    "orchestrationne", "met en tension", "catalyse", "densifie", "réinterroge",
    "fluidifie", "décloisonne", "impulse", "intègre", "capitalise sur"
  ];

  const complements = [
    "les synergies interrégionales", "la feuille de route préhospitalière", "la chaîne d’efficience clinique",
    "le continuum de service populationnel", "la priorisation des appels d’urgence",
    "l’architecture opérationnelle normée", "les ressources affectées", "le dispositif de veille stratégique",
    "les leviers d’agilité territoriale", "le schéma directeur de fluidité clinique",
    "les axes d’intervention mutualisés", "les tensions systémiques encadrées",
    "les référentiels partagés de gouvernance", "les flux décisionnels de premier recours"
  ];

  const objectifs = [
    "dans une optique de mission centrée usager", "en respectant les protocoles Santé Québec",
    "dans une logique d’amélioration continue", "pour renforcer l’exemplarité du CCSC",
    "afin de faire rayonner l’expertise populationnelle", "en maximisant la capacité de réponse 911",
    "pour garantir la cohérence des affectations", "dans une perspective de gouvernance partagée",
    "afin de soutenir la performance en temps réel", "en assurant la traçabilité des interventions",
    "pour optimiser l'efficience territoriale", "dans une logique intégrée de continuité des soins",
    "pour appuyer la coordination des parties prenantes", "en renforçant l'agilité opérationnelle en contexte critique"
  ];

  const [phrase, setPhrase] = useState("");
  const [copied, setCopied] = useState(false);

  function generer() {
    const rand = (list) => list[Math.floor(Math.random() * list.length)];
    const p = `${rand(sujets)} ${rand(verbes)} ${rand(complements)} ${rand(objectifs)}.`;
    setPhrase(p);
    setCopied(false);
  }

  function copier() {
    navigator.clipboard.writeText(phrase);
    setCopied(true);
  }

  return (
    <div className="text-center">
      <p className="mb-4 text-lg">{phrase || "Clique sur le bouton pour générer une phrase"}</p>
      <div className="flex flex-col items-center gap-2">
        <button onClick={generer} className="px-4 py-2 bg-[#d62828] text-white rounded hover:bg-red-700">
          Générer une phrase
        </button>
        {phrase && (
          <button onClick={copier} className="text-sm text-blue-700 underline">
            {copied ? "✅ Copiée !" : "Copier la phrase"}
          </button>
        )}
      </div>
    </div>
  );
}
