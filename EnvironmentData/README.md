# Environment Data
A directory holding extensive Beat Saber environment information.

## Structure
Each environment here is represented as a JSON file. 
<br>
It consists of:
* Environment Data (Environment titles, colorScheme, and default fog parameters)
* Object Data (Name, Chroma ID, and a select-list of components)

Its like Chroma Logs and [bs-env](https://github.com/Top-Cat/bs-env) had a child.

With Environment Data, this is the closest we've ever been to providing access to a variety of object data for a convenient and wide array of usages!

```json
{
  "environmentData": {
    "environmentTitle": "", // Example: The First
    "environmentId": "", // Example: DefaultEnvironment
    "colorScheme": {
      "colorLeft": [float,float,float],
      "colorRight": [float,float,float],
      "envColorLeft": [float,float,float],
      "envColorRight": [float,float,float],
      "envColorWhite": [float,float,float],
      "obstacleColor": [float,float,float],
      "envColorLeftBoost": [float,float,float],
      "envColorRightBoost": [float,float,float],
      "envColorWhiteBoost": [float,float,float]
    },
    "fogParams": { // Default fog parameters for the environment
      "offset": float,
      "height": float,
      "startY": float,
      "attenuation": float,
      "autoExposureLimit": float,
    },
    "sizeData": { // Irrelevant
      "floorType": "",
      "ceilingType": "",
      "trackLaneType": ""
    },
    "lightTracks": { // Irrelevant
      "eventTracks": {},
      "groupPages": {}
    },
    "uniqueMaterials": [
      {
        "hash": "",
        "name": "",
        "shader": "",
        "color": [float,float,float,float],
        "enabledShaderKeywords": [string[]], // All enabled shader keywords on the material
        "shaderProperties": {} // Every shader property value specific to the material
      }
    ],
    "uniqueMeshes": [
      {
        "name": "",
        "hash": "",
        "boundsSize": [float,float,float],
        "boundsCenter": [float,float,float]
      }
    ]
  },
  "objects": [
    {
      "name": "GameObject Name",
      "id": "ChromaID",
      "activeSelf": bool, // If the object is active or not
      "layer": "", // The Unity object layer
      "components": {
        "Transform": {
          "position": [float,float,float],
          "localPosition": [float,float,float],
          "rotation": [float,float,float],
          "localRotation": [float,float,float],
          "scale": [float,float,float]
        },
        "OtherComponent": {}
      }
    }
  ]
}
```

## Included Components

Most objects will contain a Transform component.

Please note this is a full list of every single component thats included, you will not need 95% of these.

### Unity

* BoxCollider
* CapsuleCollider
* MeshCollider
* SphereCollider
* Animation
* Animator
* ArticulationBody
* MeshFilter
* MeshRenderer
* ParticleSystem
* RigidBody
* SpringJoint
* SpriteRenderer
* Transform

### Light

* ColorArrayLightWithIds
* DirectionalLightWithId
* DirectionalLightWithIds
* DirectionalLightWithLightGroupIds
* GlobalShaderColorLightWithIds
* InstancedMaterialLightWithId
* LightmapLightsWithIds
* LightmapLightWithIds
* MaterialLightWithId
* MaterialLightWithIds
* ParticleSystemLightWithId
* PointLight
* PointLightWithIds
* RectangleFakeGlowLightWithLightId
* SpriteArrayLightWithId
* SpriteLightWithId
* TubeBloomPrePassLightWithId
* LightManager
* LightWithIdManager
* DirectionalLight
* Parametric3SliceSpriteController
* ParametricBoxController
* RectangleFakeGlow
* TubeBloomPrePassLight

### BloomFog

* BloomPrePassBackgroundColorsGradientElementWithLightId
* BloomPrePassBackgroundColorsGradientTintColorWithLightId
* BloomPrePassBackgroundColorsGradientTintColorWithLightIds
* BloomPrePassBackgroundLightWithId
* BloomPrePassBackgroundColor
* BloomPrePassBackgroundColorsGradient
* BloomPrePassBackgroundColorsGradientFromColorSchemeColors
* BloomPrePassBackgroundGradient
* BloomPrePassBackgroundNonLightInstancedGroupRenderer
* BloomPrePassBackgroundNonLightRenderer
* BloomPrePassBackgroundNonLightRendererCore
* BloomPrePassBackgroundParticleSystemRenderer
* BloomPrePassBackgroundSpriteRenderer
* BloomPrePassNonLightPass

### Effects

* FloatFxGroupEffectManager
* LightColorGroupEffectManager
* LightRotationGroupEffectManager
* LightTranslationGroupEffectManager
* TriggerFloatFxGroupEffectManager
* TrackLaneRingsPositionStepEffectSpawner
* TrackLaneRingsRotationEffectSpawner
* BurstFireEffect
* ContinuousFireEffect
* FloatFxGroupEffect
* HydraulicCarJumpEffect
* HydraulicCarSuspensionEffect
* LightColorGroupEffect
* LightRotationGroupEffect
* TrackLaneRingsRotationEffect
* TriggerFloatFxGroupEffect
* TubeBloomPrePassLightCollisionEffect
* TubeBloomPrePassLightReflectionEffect


### Event Effects

* BackgroundTextureGradientSwitchEventEffect
* ColliderEventEffect
* GameObjectIntSwitchEventEffect
* GameObjectSwitchEventEffect
* LightPairRotationEventEffect
* LightPairSinMoveEventEffect
* LightSwitchEventEffect
* LightRotationEventEffect
* MeshRendererSwitchEventEffect
* MovementBeatmapEventEffect
* ParticleSystemContinuousEventEffect
* ParticleSystemEmitEventEffect
* ParticleSystemEventEffect
* PhysicsPositionsMovementEventEffect
* SmoothStepPositionEventEffect
* SmoothStepPositionGroupEventEffect
* TextureIntSwitchEventEffect


### Groups

* AlphaFloatFxGroupEffectTarget
* CombineGroupIdToVector4FloatFxGroupEffectTarget
* FloatArrayMaterialPropertyEffectTarget
* FloatFxGroupEffectCollectionTarget
* FloatLocalScaleEffect
* FloatMaterialPropertyEffectTarget
* FloatSDFPointScaleEffect
* FloatTextureProcessor3DMappingFloatEffectTarget
* FloatTextureProcessor3DMappingVectorEffectTarget
* FloatTextureProcessor3DMaterialSwitchEffectTarget
* FloatTextureProcessor3DParameterEffectTarget
* FloatTextureProcessor3DPresetEffectTarget
* MoveInDirectionEffect
* Parametric3SliceSpriteWidthEndFloatFxEffectTarget
* SpectrogramMultiplierFloatFxEffectTarget
* StepFloatMaterialPropertyEffectTarget
* SwitchGameObjectArrayEffectTarget
* SwitchGameObjectEffectTarget
* VertexDisplacementFloatFxGroupEffectTarget
* FloatFxGroup
* LightColorGroup
* LightGroupCircularLayouter
* LightRotationGroup
* LightTranslationGroup

### MaterialPropertyBlock

* MaterialPropertyBlockColorSetter
* MaterialPropertyBlockController
* MaterialPropertyBlockControllerArrayRandomValueSetter
* MaterialPropertyBlockControllerRandomValueSetter
* MaterialPropertyBlockPositionUpdater
* MaterialPropertyBlockRandomValueSetter

### Other

* BakedLightsNormalizer
* BakedReflectionProbe
* CopyPosition
* CustomBoundingBox
* EnableRendererWithLightId
* EnvironmentBrandingManager
* Mirror
* ObjectMesh
* SDFArrayManager
* SDFPoint
* Spectrogram
* SpectrogramRowPropertyAnimator
* TextureProcessor3D
* TrackLaneRing
* TrackLaneRingsManager
* TransformSpectrogram