import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question : '  VDF Flooring / Vacuum Dewatered Flooring What is VDF Flooring? ',
      answer : 'VDF Flooring also known as Vacuum Dewatered Flooring is a special type of Flooring Technique to achieve High Strength, Longer Life, Better Finish and Faster Work. This type of floor is suitable for high abrasion & heavy traffic movement.The Vacuum Dewatered Flooring or VDF Flooring is a system for laying high quality concrete floors where the key is Dewatering of Concrete by Vacuum Process wherein surplus water from the concrete is removed immediately after placing and vibration, thereby reducing the water: cement ratio to the optimum level.Vacuum Dewatered Flooring (VDF) is a special type of Flooring Technique to achieve High Strength, Longer Life, Better Finish and Faster Work. This type of floor is suitable for high abrasion & heavy traffic movement. TheVDF is a system for laying high quality concrete floor. Concrete Vacuum Dewatering System. ', },
    {
      question : ' How to do the VDF Flooring? ',
      answer : ' Procedure: In this system of VDF Flooring or Vacuum Dewatered Flooring, concrete is poured in place & vibrated with a poker vibrator especially to the sides of the panel for floor thickness more than 100mm. Then surface vibration is done using double beam screed vibrator running over the surface, supported on channel shuttering spaced 4.0 meters apart. The screed vibrator is run twice to achieve optimum compaction & levelling. The vibrated surface is then levelled using a straight edge.After this a system of lower mats & top mat is laid on the green concrete & this is attached to a vacuum pump. This draws out surplus water if any. The concrete is left to stiffen. When the base concrete has stiffened to the point when light foot traffic leaves an imprint of about 3-6 mm, Floor Hardener is applied at an even application rate of between 3-5 Kg/Sqmt. Any bleed water should now have evaporated, but the concrete should have a wet sheen.The concrete is then further compacted and levelled using Power Floater followed by finishing as per the requirement using Power Trowel. ',},
    {
      question : '  What are the Benefits of VDF Flooring? ',
      answer : ' Increased Compressive Strength         ,     Increased Tensile Strength           ,             Increased Abrasion Resistance               ,             Decreased Cement Consumption ',
    },
    {
      question : ' What are the Typical Application Areas of VDF Flooring? ',
      answer : ' Warehouses, Godowns Roads, Sports Courts Cellars, Parking Areas Production Areas, Pharmaceutical Companies, As the base floor for Epoxy & PU Floorings ',
    },
    {
      question : '  What is Groove Cutting? ',
      answer : ' Groove Cutting is cutting the laid concrete providing grooves of size 5mm wide and one third of the thickness of the concrete (or as required at site) within 48 hours of laying of the concrete to form bays of 4Mtrs X 4Mtrs using heavy duty cutting machine with diamond cutting wheel and filling of the grooves with appropriate sealant.Concrete expands and contracts constantly with changes in the temperature, the moisture content of the air and due to drying of cement which results in shrinkage. The movements result in stress that can cause cracks in the concrete and destabilization of the base.Uncontrolled cracking can cause an uneven surface, which is subject to increased wear over time and water seepage, which can damage the substrate. Though cracking is almost impossible to prevent, it can be controlled. The use of specific types of control joints helps accommodate the movement of the concrete and avoid long-term damage.Making Grooves is one such method to insert contraction joints into slabs to guide cracks along a predetermined line. The purpose of the Groove Cutting is to weaken the slab along the approved line so that the slab cracks there instead of somewhere else. In order to be effective, the contraction joint must be at least one quarter as deep as the slab is thick.In case of heavy load traffic, a Load Transfer mechanism is used. Load transfer devices prevent the cement slabs from shifting under heavy loads. Shifting can cause uneven slabs and breakdown in the joints. Dowels, load plates, or slots can be embedded into the concrete to act as load transfer devices. These devices are laid perpendicular to the construction joint, extending into both slabs across the joint. Their purpose is to distribute the load evenly between slabs thereby protecting the concrete along the joints ', },
    {
      question : ' Groove Cutting Methodology? ',
      answer : ' Providing grooves of size 5mm wide and 25mm deep (or as required at site) to form bays of 4Mtrs X 4Mtrs using groove cutting machine with diamond cutting wheel and filling of the grooves with appropriate sealant. ',
    },
    {
      question : ' What is VDF Flooring or Vacuum Dewatered Flooring or Tremix Flooring? ',
      answer : ' VDF Flooring or Vacuum Dewatered Flooring or Tremix Flooring is a system for laying high quality concrete floors where the key is Dewatering of Concrete by Vacuum Process wherein surplus water from the concrete is removed immediately after placing and vibration, thereby reducing the water cement ratio to the optimum level.VDF Flooring or Vacuum Dewatered Flooring or Tremix Flooring increases the Compressive Strength, Tensile Strength, and Abrasion Resistance and minimizes the Shrinkage and Floor Wraps. VDF Flooring results in High Strength, Longer Life, Better Finish and Faster Work. This type of floor is suitable for high abrasion & heavy traffic movement ',},
    {
      question : ' What is the full form of VDF Flooring? ',
      answer : ' The full form of VDF Flooring is Vacuum Dewatered Flooring ',
    },
    {
      question : ' What is the work Methodology of VDF Flooring or Vacuum Dewatered Flooring or Tremix Flooring? ',
      answer : ' (VDF Flooring Specifications or Flooring Specifications or VDF Flooring Methodology or VDF Flooring Procedure or Vacuum Dewatered Flooring Specification or Vacuum Dewatered Flooring Procedure) \n\n • Tying Line Dori (Threads) as per the slope requirements \n\n • Laying Guide Rails to every 4 meters using MS Channels or as required in straight lines along the Line Dori, taking levels as per the slope and fixing them using concrete also called grouting and left to set for a minimum of 24 hours <br />• Pouring the concrete in between the channels and spreading using Shovel or Hoe (Kudal/Parah)<br />• Vibrating the concrete with a poker vibrator especially to the sides of the panels<br />• Surface Vibration the concrete using Double Beam Screed Vibrator running over the guide rails twice to achieve maximum compaction for RCC with double mats<br />• Final levelling of the concrete using the Straight Edge/Bull Float/Aluminium Bottom (Fanti/Baddha)<br />• A system of lower mats & top mat is laid on the green concrete & this is attached to a vacuum pump. This draws out surplus water if any. (We strongly oppose dewatering of RMCs. RMCs have water cement ratio already maintained to its minimum possible level by addition of admixtures. Further dewatering decreases the water cement ratio below the required level thereby causing undulations in the surface, loss in strength and formation of cracks.)<br />• The concrete is left to stiffen. When the base concrete has stiffened to the point when foot traffic leaves an imprint of about 3-6 mm and any bleed water should now have evaporated, but the concrete should have a wet sheen, Floor Hardener is applied at an even application rate of 3-7 Kg/Sqm or as per the requirement of the floor.<br />• Application of Power Floater on the surface until the surface is sufficiently compacted & levelled with no major lines appearing any more.<br />• Final finishing using Power Trowel and trowelling until the required finish is achieved. Finish could be any of the Smooth Finish, Sand Finish or Line Finish.',},
    {
      question : ' What is the cost of VDF Flooring or Vacuum Dewatered Flooring or Tremix Flooring? ',
      answer : ' For the least cost of VDF Flooring, please call us on 6300841097 / 7799155901 or write to us at instantvdfconstructions@gmail.com www.instantvdfconstructions.com ',
    },
    {
      question : ' What is the Tolerence for VDF Flooring? ',
      answer : ' Tolerance of VDF Flooring varies with the kind of machinery used for Screeding and Trowelling : Laser Screed <4.5 mm FM1 ; Double Beam Screed Vibrator <8.5 mm FM2 ',
    },
    {
      question : ' Who is the best contractor for Industrial Flooring Work in India? ',
      answer : 'INSTANT VDF CONSTRUCTIONS is the best contractor for Industrial Flooring works in India like VDF Flooring or Vacuum Dewatered Flooring or Tremix Flooring, Laser Screeding, Epoxy Flooring and Groove Cutting works ',
    },
    {
      question : ' What is the difference between IPS Flooring and VDF Flooring? ',
      answer : ' An IPS (Indian Patent Stone) Floor is generally used over terraces in general, to achieve an economical and water sloping finish with a decent monolithic appearance....However the IPS finish may even be used for other interior and semi-interior areas as the need may be, but in areas, where required structural strength by a floor would be more eg. Car Parks, Workshops and Driveways, a similar kind of a multi-layered flooring using lean concrete in a different proportion altogether may be utilised......Unlike IPS, a VDF floor calls for a more skilled labour with almost twice as many man hours over the same stretch..... This system raises the cost as there is machinery required, but appearance wise and strength wise the VDF (Vacuum Dewatered Floor) floor stands out...... ; The VDF is generally done with a base layer of lean concrete with suitable expansion joints executed with rubber or steel strips... Then a screed vibrator is run over the surface, supported on channel shuttering spaced 4.0 meters apart. The screed vibrator is run twice to achieve optimum compaction & levelling. After this a system of lower mats & top mat is laid on the green concrete & this is attached to a vacuum pump. This draws out excess water ',
    },    
    {
      question : ' Who is the best contractor for Industrial Flooring Work in India? ',
      answer : ' VDF CONSTRUCTIONS is the best contractor for Industrial Flooring works in India like VDF Flooring or Vacuum Dewatered Flooring or Tremix Flooring, Laser Screeding, Epoxy Flooring and Groove Cutting works ',
    },
    {
      question : ' What is Laser Screeding? ',
      answer : ' (Laser Screed Flooring or Laser Screed Concrete Floors) :- Laser Screeding is the modern way to do the concrete flooring. This technique allows us to lay concrete floors in wider bays of any size. It drastically reduces Time, Labor, number of Construction Joints and eventually improves the flatness of floors. With this technique it is possible to lay concrete floors up to 3,000 Sqm per day.It eliminates the need of fixing guide rails to every 4 meters. Laser screed simultaneously cuts, vibrates and levels the concrete in a single pass. All these operations are controlled by laser transmitter, receivers and computer. So, manual errors are eliminated thereby giving us Zero Level Difference floor (Super Flat). ',
    },
    {
      question : ' What are the uses of Laser Screeding or Laser Screed Flooring? ',
      answer : ' Exceeds specified FF and FLs on projects ; Greater accuracy through Laser Technology ; Reduces labour costs due to faster placing times ; Produces floors of unequalled Flatness & Levelness. ; Reduced form work ; Decreased number of cold joints ; Increases Productivity & Efficiency ',
    },
    {
      question : ' What is the Laser Screed Price or the cost of doing Laser Screeding? ',
      answer : ' please call us on 6300841097 / 7799155901 or write to us at instantvdfconstructions@gmail.com www.instantvdfconstructions.com ',
    },
    {
      question : ' What is the Tolerance of Laser Screeding? ',
      answer : ' Tolerance of Laser Screeding is 1 mm. Tolerance of Laser Screeding followed by Ride on Trowel finish is 2mm ',
    },
    {
      question : ' What is Groove Cutting? ',
      answer : ' Groove Cutting is the technique to provide control joints in Concrete to guide cracks along a predetermined line and to help accommodate the movement of the concrete and avoid Cracking of Concrete and long-term damage. Concrete expands and contracts constantly with changes in the temperature, the moisture content of the air and due to drying of cement which results in shrinkage. The movements result in stress that can cause cracks in the concrete and destabilization of the base.Uncontrolled cracking can cause an uneven surface, which is subject to increased wear over time and water seepage, which can damage the substrate. Though formation of cracks is almost impossible to prevent, it can be controlled. The purpose of the Groove Cutting is to weaken the slab along the predetermined line so that the slab cracks there instead of somewhere else ',
    },
    {
      question : ' What are the benefits of Groove Cutting? ',
      answer : ' To help accommodate the movement of the concrete and avoid Cracking of Concrete and long-term damage. Prevents cracking of concrete and increases the life of concrete Gives Aesthetic Looks. ',
    },
    {
      question : ' What is Epoxy Flooring? ',
      answer : ' Epoxy flooring is Smooth, Monolithic Flooring using multiple layers of Epoxy Resins that is applied to the floor to different thicknesses depending upon the requirements. The epoxies are self levelling by nature, thereby spreading across the floor itself, in a manner so as to minimize the undulations and bring about as level a floor as possibleConcrete surfaces are porous, making them vulnerable to water, abrasion and chemicals. When applied to concrete, Epoxy Flooring creates a protective layer of protection which enhances aesthetics and hardens the surface. Epoxy systems are exceptionally diverse and can be engineered to meet the unique demands of nearly any facility.Epoxy flooring is tough, smooth, aesthetic and resistance to Moisture, Chemicals and wear & tear which gives abrasion resistance to surfaces, easy to clean and offers a very glossy look to the surface. Due to these properties this kind of flooring is suitable for Industries like Automobile, Pharmaceuticals, Dairy and other Food grades.Epoxy is any of various usually thermosetting resins capable of forming tight cross-linked polymer structures characterized by toughness, strong adhesion, and low shrinkage, used for floorings. Epoxy in this case refers to a system that is made up of resins, hardeners, fillers & pigment. The resin and hardener is mixed together where they chemically react to form a rigid plastic material that is strong, resistant to degradation and that bond extremely well to its substrate ',
    },
    {
      question : ' What is the cost of Groove Cutting? ',
      answer : ' please call us on 6300841097 / 7799155901 or write to us at instantvdfconstructions@gmail.com www.instantvdfconstructions.com ',
    },
    {
      question : ' What is Vacuum dewatering procedure? ',
      answer : ' • Vacuum dewatering process removes surplus water present in the concrete. This is done using the Vacuum Equipment comprising of Suction Mat Top Cover, Filter pads and Vacuum Pump. The process starts immediately after surface vibration. • Filter pads are placed on the fresh concrete leaving about 4 inches of fresh concrete exposed on all sides. The Top Cover is then placed on the filter pads and rolled out till it covers the strips of exposed concrete on all sides. The Top Cover is then connected to the vacuum pump through a suction hose and the pump is started. • Vacuum is immediately created between the filter pads and the top cover. Atmospheric pressure compresses the concrete and the surplus water is squeezed out. This process lowers the water content in the concrete by 15-25%. • The dewatering operation takes approximately 1.5 - 2 minutes per centimetre thickness of the floor. The dewatered concrete is compacted and dried to such an extent that it is possible to walk on it without leaving any foot prints. This is the indication of concrete being properly dewatered and ready for finishing ',
    },
    {
      question : ' What are the benefits of VDF Flooring or Vacuum Dewatered Flooring or Tremix Flooring? ',
      answer : ' • Reduced Cement consumption by more than 30% as no cement is required separately for finishing. ; • Increased Abrasion resistance by more than 50% ; • Increased wear resistance ; • Minimum dusting & crack formation ; • Minimum dry and plastic shrinkage and floor wraps ; • Uniform homogeneous floor with High flatness accuracy ; • Lower water permeability due to increased density. ; • High early strength minimizes damage on newly cast floors ; • Earlier utilization and Reduced maintenance cost ',
    },
    {
      question : ' Typical Application Areas of VDF Flooring? ',
      answer : ' • Warehouses, Godowns ; • Roads, Sports Courts ; • Cellars, Parking Areas ; • Production Areas ; • Pharmaceutical Companies ; • As the base floor for Epoxy & PU Floorings ',
    },
    {
      question : ' Does Vacuum Dewatered Concrete require curing? ',
      answer : ' Yes, Vacuum Dewatered Concrete also requires curing for 21 days ',
    },
    {
      question : ' What are the Serious Concerns ofVDF Flooring or Vacuum Dewatered Flooring or Tremix Flooring? ',
      answer : ' • The withdrawal of water produces settlement of the concrete, possibly up to 3%. This can be topped up with the application of a dry shake but with little bleed water at the surface there is arisk of subsequent delaminating. ; • In practice the VDF process produces voids in the concrete and it has been found that with the same water / cement ratio, ordinary concrete has been found to have a somewhat higher strength than VDF concrete. ; • VDF concrete stiffens very quickly. This is acceptable in cold climatic conditions but leaves the window of workability very short in hotter climates. ; • Some of the finer materials are removed with the VDF process and fine sands and cement contents of greater than 350 Kg/Cum should be avoided ',
    },
    {
      question : ' Should we do Vacuum Dewatering when using RMCs? ',
      answer : ' In RMCs the water-cement ratio is already optimum. By the application of suitable admixtures in concrete water cement ratio is at its minimum specified value. Any further decrease in water cement ratio shall cause lack of sufficient water for the complete curing of cement particles thereby decreasing the strength of concrete and even causing cracks. So, even though as the name suggests, Vacuum Dewatering is the KEY to the whole VDF Flooring Process; this process should not be used when RMC or Ready Mixed Concrete is used. ',
    },
    {
      question : ' What is a Screed vibrator? ',
      answer : ' Screed vibrator is used for the levelling as well compaction of concrete it consists of high quality steel bar (4.2 meter) with spacing of 250 MM in between. Special water protective vibrator motor is mounted in the centre which produces 1830 N centrifugal force which is most ideal for compaction of green concrete. They are also available in different sizes from 2 meter to 5.5 meter. ',
    },
    {
      question : ' What is Vaccum Pump? ',
      answer : ' This is the core of the system. A continuous discharge vacuum pump is complete self contained unit. The unit is mounted on a transportation trolley. 24Sqmt freshly laid concrete can be De-watered in one single operation with one set mat. The pump is powered by 7.5 H.P. 3 Phase electric motor. ',
    },
    {
      question : ' What are Filter,Suction and Top Mat? ',
      answer : ' Suction mat is placed directly on the green concrete after vi bro screed operation is over. A Special high class nylon filter is fixed on plastic mats which acts a filter during the vacuum operation filter mats in different sizes are provided with the system, Top mat is provided the junction box and is De-watering placed on top of filter mat for the purpose of sealing special synthetic cloth is used in the top mat it comes in standard sizes of 4x6 meter. ',
    },
    {
      question : ' What is a Power Floater? ',
      answer : ' It is surface grinding equipment powered by 3 H.P. Electric motor through gear box with floating RPM of 130. It grinds the surface to make it wear resistance. ',
    },
    {
      question : ' What is a Form work? ',
      answer : ' Construction of floor begins with careful preparation. Before casting MS Channel are generally used us form works. They act as a stopper, also as support for pulling the screed board vibrator. ',
    },
    {
      question : ' What is IPS Flooring? ',
      answer : ' IPS flooring stands for Indian patent stone flooring. It is a basic type of concrete flooring which provides good wearing properties. It is generally used for all types of floors and mix of concrete. Generally used mix for IPS flooring specification is 1:1.5:3 (cement, sand and stone aggregates). It is laid over the concrete base (1:4:8), which is almost 3 to 4 inches thick plain cement concrete (PCC) base. We can decide the thickness of the IPS flooring as per the requirement of work; in residential floor 75 mm floor thickness is sufficient whereas industrial floor thickness should be kept 150 mm. ',
    },
    {
      question : '  What is the full form of IPS Flooring? ',
      answer : ' The full Form of IPS Flooring is Indian Patent Stone Flooring or Indian Pattern Stone Flooring ',
    },
    {
      question : '  What is the work Methodology of IPS Flooring? ',
      answer : ' (IPS Flooring Specifications or Flooring Specifications or IPS Flooring Methodology or IPS Flooring Procedure) ; • Making a reference level on the wall and transferring this marking to all locations where flooring is to be done using tube level. ; • Flooring thickness level to be marked and dummy level dots provided in every 1 or 2 meter ensuring required slope of flooring. ; • Concrete be poured and levelled with a Straight Edge and finished with a wooden float or trowel. Concrete may be placed in panels to minimize shrinkage cracks. ; • Glass, aluminium or brass strip are fixed in cement mortar with their tops at proper level according to slope and allowed to harden for minimum 36 hours. ; • The final towelling should be done before the concrete has become hard and sufficient pressure is required to make firm impression on the concrete surface. ; • If glossy or smooth IPS flooring surface required then neat cement punning, 2 to 3 mm thick is spread over the IPS concrete surface and allowed to soak into the concrete. The surface is finished with metal trowel to give surface a glossy look. ; • Concrete is cured by surface ponding or wet Hessian clothes are spread for 21days ',
    },
    {
      question : ' What is the cost of IPS flooring? ',
      answer : ' please call us on 6300841097 / 7799155901 or write to us at instantvdfconstructions@gmail.com www.instantvdfconstructions.com  ',
    },
    {
      question : ' What is the example of IPS flooring? ',
      answer : ' An IPS Floor is generally used over Terraces, Car Parks, Workshops and Driveways in general, to achieve an economical and water sloping finish with a decent monolithic appearance. IPS finish may even be used for other interior and semi-interior areas as the need may be. ',
    },
    {
      question : '  Where is Laser Screeding used? ',
      answer : ' (Typical Application Areas) :- • Doubly reinforced slabs ; • Metal decks ; • Grade slabs with dual slopes ; • very large factory floors ; • For faster Works ; • For Zero Level Floors with no undulations ',
    },
    {
      question : ' How a Laser Screed works or what are Laser Screeding Specifications? ',
      answer : ' (Laser Screeding Methodology or Laser Screeding Procedure or Laser Screeding Flooring Specification or Laser Screeding Flooring Procedure) ; • In Laser Screeding concrete is poured on the surface and Laser Screed cuts, vibrates and levels the concrete in a single pass. Laser Screed eliminates the need of fixing guide rails to every 4 meters. ; • All the operations are controlled by laser transmitter, receivers and computer. So, manual errors are eliminated thereby producing high strength, dense; durable floors improving floor quality & increasing profits. ; • Our Laser Screed being compact, portable, and extremely manoeuvrable, making it easy to gain access to almost any area and can also be used on elevated slabs and rebar floors and covers areas in excess of 3,000Sqm per day thereby decreasing the Labour Cost. ; • We are equipped with the Latest Laser Screed and Power Rake providing state of the art concrete placing technology. ',
    },
    {
      question : '  What are Somero Laser Screed or Bull Laser Screed? ',
      answer : ' These are the Laser Screeding Machines used by us to do the Laser Screeding ',
    },    
    {
      question : ' What is the work Methodology of Groove Cutting? ',
      answer : ' (Groove Cutting Specifications or Groove Cutting Methodology or Groove Cutting Procedure or Groove Cutting Specification) ; • Leaving the concrete surface to get cured for a minimum of 72 hours after casting to avoid chipping off of edges . ; • Locating the joints and marking on the concrete using Line Dori and Paint exactly along the joints making panels of 4Mtrs X 4Mtrs or as specified. ; • Cutting the concrete using heavy duty Cutting Machine with diamond cutting wheel of 4mm thickness. ; • The Minimum thickness of the Grooves should be 4mm and Minimum depth of the Groove should be one fourth of the thickness of the concrete. ; • Cleaning the Grooves using air blower and filling with appropriate sealant. ',
    },
    {
      question : ' What is Epoxy Coating? ',
      answer : ' Any epoxy floor that is less than one millimetre thick is best referred to as an epoxy floor coating. This is accomplished by application of one coat of Epoxy Primer and Two Coats of Brush/Roller applied Epoxy Paint. ',
    },
    {
      question : ' What is the difference between Epoxy Flooring and Epoxy Coating? ',
      answer : ' The difference between Epoxy Flooring and an Epoxy Floor Coating lies in the depth of the epoxy. An epoxy floor must be at least one millimetre thick. Any epoxy floor that is less than one millimetre thick is best referred to as an epoxy floor coating ',
    },
    {
      question : ' What is the work Methodology of Epoxy Flooring? ',
      answer : ' (Epoxy Flooring Specifications or Epoxy Flooring Methodology or Epoxy Flooring Procedure or Epoxy Flooring Specification) ; • Cleaning: The substrate should be made structurally sound, dry and free from loose materials. All the surface contamination, laitance, grease and oil must be removed appropriately while deeper penetration should be removed by mechanical means. ; • Surface Preparation: Filling cracks & patches if any with epoxy mortar, while bigger pot holes to be treated with non-shrink repair mortars. ; • Priming: Application of one coat of solvent free epoxy resin based primer for better adhesion of the subsequent flooring to the substrate. ; • Epoxy Topping: - Resin, Hardener, Filler and pigment are mixed together and laid on the floor to required thickness using notched trowel and finished using spike rollers. ',
    },
    {
      question : ' What is the work Methodology of Epoxy Coating or Epoxy Coating Specifications or Epoxy Coating Methodology or Epoxy Coating Procedure or Epoxy Coating Process? ',
      answer : ' • Cleaning: The substrate should be made structurally sound, dry and free from loose materials. All the surface contamination, laitance, grease and oil must be removed appropriately while deeper penetration should be removed by mechanical means. ; • Surface Preparation: Filling cracks & patches if any with epoxy mortar, while bigger pot holes to be treated with non-shrink repair mortars. ; • Priming: Application of one coat of solvent free epoxy resin based primer for better adhesion of the subsequent flooring to the substrate. ; • Epoxy Coating: - Resin, Hardener and pigment are mixed together and applied on the floor to required thickness using Brush ',
    },
    {
      question : ' What are the types of Epoxy Flooring? ',
      answer : ' • Food Grade Epoxy Flooring ; • Heavy Duty Epoxy Flooring ; • Anti Skid Epoxy Flooring ; • Anti Static Epoxy Flooring ',
    },
    {
      question : ' What are the advantages or benefits of Epoxy Flooring? ',
      answer : ' • Tough, Smooth, Aesthetic, seamless surface finish ; • Low Porosity, Moisture and Water resistant ; • Dirt & Dust free and thus easy to clean ; • Strong Bond Strength to the substrate ; • Provides Safe, Cleaner, Healthier & More Pleasant ambience ; • Non Inflammable and Anti-skid thus provides safe surface for Industrial use ; • Attractive flooring surface with Glossy or Mat finish as required ; • Attractive flooring surface with Glossy or Mat finish as required ; • Chemical Resistant and thus protects the substrate from chemical degradation ; • High Impact Resistance and thus protects the substrate from wear and tear ; • Allow for quick and easy application ',
    },
    {
      question : ' What are the benefits of Epoxy Coating? ',
      answer : ' • Tough, Smooth, Aesthetic, seamless surface finish ; • Low Porosity, Moisture and Water resistant ; • Dirt & Dust free and thus easy to clean ; • Strong Bond Strength to the substrate ; • Provides Safe, Cleaner, Healthier & More Pleasant ambience ; • Non Inflammable and Anti-skid thus provides safe surface for Industrial use ; • Attractive flooring surface with Glossy or Mat finish as required ; • Attractive flooring surface with Glossy or Mat finish as required ; • Chemical Resistant and thus protects the substrate from chemical degradation ; • High Impact Resistance and thus protects the substrate from wear and tear ; • Allow for quick and easy application ',
    },
    {
      question : ' Typical Application areas of Epoxy Flooring? ',
      answer : ' • Pharmaceuticals Industries, ; • Food Processing Industries, ; • Automobile Industries, ; • Chemical & Fertilizer Industries, ; • Garages & Car Parkings ; • Ware Houses ',
    },
    {
      question : ' What is waterproofing ? ',
      answer : ' The best way to waterproof a flat terrace is to utilize a waterproofing membrane. This is a thin layer of waterproof material that is continuous and offers no way for water to enter the structure. With Rust-Oleum Elastomeric Roof Coating, no more do you need to confront the issues of water dripping from your roof. Waterproofing is the process of making an object or structure waterproof or water-resistant so that it remains relatively unaffected by water or resisting the ingress of water under specified conditions. Such items may be used in wet environments or underwater to specified depths.Water-resistant and waterproof often refer to penetration of water in its liquid state and possibly under pressure, whereas damp proof refers to resistance to humidity or dampness. Permeation of water vapour through a material or structure is reported as a moisture vapor transmission rate (MVTR). ',
    },
    {
      question : ' Top Waterproofing Contractors in Hyderabad ? ',
      answer : ' INSTANT VDF CONSTRUCTIONS is the best contractor for Waterproofing works in India like VDF Flooring or Vacuum Dewatered Flooring or Tremix Flooring, Laser Screeding, Epoxy Flooring and Groove Cutting works Contact - 6300841097 , 7799155901. www.instantvdfconstructions.com email - instantvdfconstructions@gmail.com ',
    },
    {
      question : ' Best Waterproofing Company in Hyderabad or Telangana ?',
      answer : ' INSTANT VDF CONSTRUCTIONS is the best contractor for Waterproofing works in India like VDF Flooring or Vacuum Dewatered Flooring or Tremix Flooring, Laser Screeding, Epoxy Flooring and Groove Cutting works Contact - 6300841097 , 7799155901. www.instantvdfconstructions.com email - instantvdfconstructions@gmail.com  ',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="/images/head5.jpg"
            alt="FAQ"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0f172a]/80" />
        </div>
        
        <div className="container mx-auto px-4 z-10 relative text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-white mb-4"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Find answers to common questions about our services
          </motion.p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition"
                >
                  <span className="text-lg font-bold text-[#0f172a] pr-4">{faq.question}</span>
                  <span className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="text-[#f97316]" size={24} />
                    ) : (
                      <Plus className="text-[#f97316]" size={24} />
                    )}
                  </span>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#f97316] to-[#ea580c]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Our team is here to help. Contact us for personalized assistance.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-[#f97316] px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold text-lg"
              >
                Contact Us
              </a>
              <a
                href="/quote"
                className="bg-[#0f172a] text-white px-8 py-4 rounded-lg hover:bg-[#1e293b] transition font-semibold text-lg"
              >
                Get Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
export default FAQ