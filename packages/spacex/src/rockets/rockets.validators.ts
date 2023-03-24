import { z } from "zod";

import {
  DiameterSchema,
  MassSchema,
  ThrustSchema,
} from "../_shared/_shared.validators";

export const EngineSchema = z.object({
  isp: z.object({
    sea_level: z.number(),
    vacuum: z.number(),
  }),
  thrust_sea_level: ThrustSchema,
  thrust_vacuum: ThrustSchema,
  number: z.number(),
  type: z.string(),
  version: z.string(),
  layout: z.string().nullable().default(null),
  engine_loss_max: z.number().nullable().default(null),
  propellant_1: z.string(),
  propellant_2: z.string(),
  thrust_to_weight: z.number(),
});

export const RocketSchema = z.object({
  active: z.boolean(),
  boosters: z.number(),
  company: z.string(),
  cost_per_launch: z.number(),
  country: z.string(),
  description: z.string(),
  diameter: DiameterSchema,
  engines: EngineSchema,
  first_stage: z.object({
    burn_time_sec: z.number().nullable().default(null),
    engines: z.number(),
    fuel_amount_tons: z.number(),
    reusable: z.boolean(),
    thrust_sea_level: ThrustSchema,
    thrust_vacuum: ThrustSchema,
  }),
  first_flight: z.string(),
  flickr_images: z.array(z.string().url()),
  height: DiameterSchema,
  id: z.string(),
  landing_legs: z.object({
    material: z.string().nullable().default(null),
    number: z.number(),
  }),
  mass: MassSchema,
  name: z.string(),
  payload_weights: z.array(
    z.object({
      id: z.string(),
      kg: z.number(),
      lb: z.number(),
      name: z.string(),
    })
  ),
  second_stage: z.object({
    burn_time_sec: z.number().nullable().default(null),
    engines: z.number(),
    fuel_amount_tons: z.number(),
    payloads: z.object({
      composite_fairing: z.object({
        diameter: DiameterSchema,
        height: DiameterSchema,
      }),
      option_1: z.string(),
    }),
    reusable: z.boolean(),
    thrust: ThrustSchema,
  }),
  stages: z.number(),
  success_rate_pct: z.number(),
  type: z.string(),
  wikipedia: z.string().url(),
});

export const RocketsSchema = z.array(RocketSchema);

export const RocketParamsSchema = z.object({
  id: z.string(),
});
