// Service interface structure
export const createService = (data) => ({
  id: data.id,
  icon: data.icon,
  title: data.title,
  shortDesc: data.shortDesc,
  detailedDesc: data.detailedDesc,
  features: data.features || [],
  image: data.image,
  beforeAfter: data.beforeAfter || { before: "", after: "" },
  whatsappMessage: data.whatsappMessage,
  price: data.price,
  rating: data.rating,
  completedJobs: data.completedJobs,
  urgency: data.urgency,
})

// Testimonial interface structure
export const createTestimonial = (data) => ({
  name: data.name,
  rating: data.rating,
  text: data.text,
  service: data.service,
  image: data.image,
  location: data.location,
})

// Stat interface structure
export const createStat = (data) => ({
  icon: data.icon,
  number: data.number,
  label: data.label,
})

// Language types
export const LANGUAGES = {
  EN: "en",
  ES: "es",
  FR: "fr",
  AR: "ar",
}
