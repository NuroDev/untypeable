import { z } from "zod";

export const HeatShieldSchema = z.object({
  dev_partner: z.string(),
  material: z.string(),
  size_meters: z.number(),
  temp_degrees: z.number(),
});

export const MassSchema = z.object({
  kg: z.number(),
  lb: z.number(),
});

export const VolumeSchema = z.object({
  cubic_meters: z.number(),
  cubic_feet: z.number(),
});

export const PressurizedCapsuleSchema = z.object({
  payload_volume: VolumeSchema,
});

export const TrunkSchema = z.object({
  trunk_volume: VolumeSchema,
  cargo: z.object({
    solar_array: z.number(),
    unpressurized_cargo: z.boolean(),
  }),
});

export const DiameterSchema = z.object({
  meters: z.number(),
  feet: z.number(),
});

export const DragonSchema = z.object({
  heat_shield: HeatShieldSchema,
  launch_payload_mass: MassSchema,
  launch_payload_vol: VolumeSchema,
  return_payload_mass: MassSchema,
  return_payload_vol: VolumeSchema,
  pressurized_capsule: PressurizedCapsuleSchema,
  trunk: TrunkSchema,
  height_w_trunk: DiameterSchema,
  diameter: DiameterSchema,
  first_flight: z.string().nullable().default(null),
  flickr_images: z.array(z.string().url()),
  name: z.string(),
  type: z.string(),
  active: z.boolean(),
  crew_capacity: z.number(),
  sidewall_angle_deg: z.number(),
  orbit_duration_yr: z.number(),
  dry_mass_kg: z.number(),
  dry_mass_lb: z.number(),
  thrusters: z.array(
    z.object({
      type: z.string(),
      amount: z.number(),
      pods: z.number(),
      fuel_1: z.string(),
      fuel_2: z.string(),
      isp: z.number(),
      thrust: z.object({
        kN: z.number(),
        lbf: z.number(),
      }),
    })
  ),
  wikipedia: z.string().url(),
  description: z.string(),
  id: z.string(),
});

export const DragonsSchema = z.array(DragonSchema);

export const DragonParamsSchema = z.object({
  id: z.string(),
});
