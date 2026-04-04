/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import type { PageMeta } from "@webstudio-is/sdk";
      import type { System, ResourceRequest } from "@webstudio-is/sdk";
export const getResources = (_props: { system: System }) => {
  const _data = new Map<string, ResourceRequest>([
  ])
  const _action = new Map<string, ResourceRequest>([
  ])
  return { data: _data, action: _action }
}


      export const getPageMeta = ({
  system,
  resources,
}: {
  system: System;
  resources: Record<string, any>;
}): PageMeta => {
  return {
    title: "Brent Sauls, ICLS: About",
    description: "Brent Sauls is an African Gaffer with nearly two decades of experience across features, series, and premium commercial work. Classically trained, he has worked every role in the lighting department — from trainee, spark, and best boy to Gaffer on Main Unit, Rigging, 2nd Unit, and VFX Unit — building a deep, lived understanding of both the craft and the crews behind it, a lighting technician shaped by the full spectrum of the discipline.",
    excludePageFromSearch: false,
    language: "en-uk",
    socialImageAssetName: undefined,
    socialImageUrl: "",
    status: undefined,
    redirect: "",
    custom: [
    ],
  };
};


      type Params = Record<string, string | undefined>;
export const getRemixParams = ({ ...params }: Params): Params => {
  return params
}


      export const contactEmail = "benji@jambonbeurre.co.uk";
    