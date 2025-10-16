export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      ads: {
        Row: {
          canton_id: number
          category_id: number | null
          city_id: number
          created_at: string | null
          description: string
          id: string
          owner_user_id: string
          photos: Json | null
          service_id: number
          status: string
          title: string
          updated_at: string | null
        }
        Insert: {
          canton_id: number
          category_id?: number | null
          city_id: number
          created_at?: string | null
          description: string
          id?: string
          owner_user_id: string
          photos?: Json | null
          service_id: number
          status?: string
          title: string
          updated_at?: string | null
        }
        Update: {
          canton_id?: number
          category_id?: number | null
          city_id?: number
          created_at?: string | null
          description?: string
          id?: string
          owner_user_id?: string
          photos?: Json | null
          service_id?: number
          status?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ads_canton_id_fkey"
            columns: ["canton_id"]
            isOneToOne: false
            referencedRelation: "cantons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ads_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ads_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "cities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ads_owner_user_id_fkey"
            columns: ["owner_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ads_owner_user_id_fkey"
            columns: ["owner_user_id"]
            isOneToOne: false
            referencedRelation: "profiles_enriched"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ads_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      agency_services_catalog: {
        Row: {
          created_at: string | null
          id: number
          name: string
          order_index: number | null
          slug: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          name: string
          order_index?: number | null
          slug?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string
          order_index?: number | null
          slug?: string | null
        }
        Relationships: []
      }
      audit_logs: {
        Row: {
          action: string
          actor_user_id: string | null
          created_at: string | null
          id: number
          meta: Json | null
          object_id: string
          object_table: string
        }
        Insert: {
          action: string
          actor_user_id?: string | null
          created_at?: string | null
          id?: number
          meta?: Json | null
          object_id: string
          object_table: string
        }
        Update: {
          action?: string
          actor_user_id?: string | null
          created_at?: string | null
          id?: number
          meta?: Json | null
          object_id?: string
          object_table?: string
        }
        Relationships: [
          {
            foreignKeyName: "audit_logs_actor_user_id_fkey"
            columns: ["actor_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "audit_logs_actor_user_id_fkey"
            columns: ["actor_user_id"]
            isOneToOne: false
            referencedRelation: "profiles_enriched"
            referencedColumns: ["id"]
          },
        ]
      }
      avatar_url: {
        Row: {
          accepted_currencies: string[] | null
          accepts_couples: boolean | null
          address: string | null
          address_detail: string | null
          age: number | null
          agency_services: string[] | null
          air_conditioned: boolean | null
          blocked_countries: string[] | null
          breast_size: string | null
          breast_type: string | null
          build: string | null
          canton_id: number | null
          category: string | null
          city_id: number | null
          created_at: string | null
          description: string | null
          do_travel: string | null
          elderly_welcomed: boolean | null
          expires_at: string | null
          eye_color: string | null
          hair_color: string | null
          has_tattoos: boolean | null
          height: string | null
          hidden: boolean
          id: string
          is_smoker: boolean | null
          location_type: string | null
          managed_person_name: string | null
          mobility: string[] | null
          nickname: string | null
          onlyfans_link: string | null
          onsite_parking: boolean | null
          origin: string | null
          owner_user_id: string
          payment_methods: string[] | null
          plan_id: number | null
          prices: string | null
          professional_phone: string | null
          pubes: string | null
          salon_services: string[] | null
          services: string[] | null
          smokers_accepted: boolean | null
          spoken_languages: Json | null
          status: Database["public"]["Enums"]["listing_status"]
          status_message: string | null
          title: string | null
          updated_at: string | null
          videocam_meeting: boolean | null
          website_link: string | null
          whatsapp_number: string | null
          wheelchair_accessible: boolean | null
          working_days: string[] | null
          working_hours: string[] | null
        }
        Insert: {
          accepted_currencies?: string[] | null
          accepts_couples?: boolean | null
          address?: string | null
          address_detail?: string | null
          age?: number | null
          agency_services?: string[] | null
          air_conditioned?: boolean | null
          blocked_countries?: string[] | null
          breast_size?: string | null
          breast_type?: string | null
          build?: string | null
          canton_id?: number | null
          category?: string | null
          city_id?: number | null
          created_at?: string | null
          description?: string | null
          do_travel?: string | null
          elderly_welcomed?: boolean | null
          expires_at?: string | null
          eye_color?: string | null
          hair_color?: string | null
          has_tattoos?: boolean | null
          height?: string | null
          hidden?: boolean
          id?: string
          is_smoker?: boolean | null
          location_type?: string | null
          managed_person_name?: string | null
          mobility?: string[] | null
          nickname?: string | null
          onlyfans_link?: string | null
          onsite_parking?: boolean | null
          origin?: string | null
          owner_user_id: string
          payment_methods?: string[] | null
          plan_id?: number | null
          prices?: string | null
          professional_phone?: string | null
          pubes?: string | null
          salon_services?: string[] | null
          services?: string[] | null
          smokers_accepted?: boolean | null
          spoken_languages?: Json | null
          status?: Database["public"]["Enums"]["listing_status"]
          status_message?: string | null
          title?: string | null
          updated_at?: string | null
          videocam_meeting?: boolean | null
          website_link?: string | null
          whatsapp_number?: string | null
          wheelchair_accessible?: boolean | null
          working_days?: string[] | null
          working_hours?: string[] | null
        }
        Update: {
          accepted_currencies?: string[] | null
          accepts_couples?: boolean | null
          address?: string | null
          address_detail?: string | null
          age?: number | null
          agency_services?: string[] | null
          air_conditioned?: boolean | null
          blocked_countries?: string[] | null
          breast_size?: string | null
          breast_type?: string | null
          build?: string | null
          canton_id?: number | null
          category?: string | null
          city_id?: number | null
          created_at?: string | null
          description?: string | null
          do_travel?: string | null
          elderly_welcomed?: boolean | null
          expires_at?: string | null
          eye_color?: string | null
          hair_color?: string | null
          has_tattoos?: boolean | null
          height?: string | null
          hidden?: boolean
          id?: string
          is_smoker?: boolean | null
          location_type?: string | null
          managed_person_name?: string | null
          mobility?: string[] | null
          nickname?: string | null
          onlyfans_link?: string | null
          onsite_parking?: boolean | null
          origin?: string | null
          owner_user_id?: string
          payment_methods?: string[] | null
          plan_id?: number | null
          prices?: string | null
          professional_phone?: string | null
          pubes?: string | null
          salon_services?: string[] | null
          services?: string[] | null
          smokers_accepted?: boolean | null
          spoken_languages?: Json | null
          status?: Database["public"]["Enums"]["listing_status"]
          status_message?: string | null
          title?: string | null
          updated_at?: string | null
          videocam_meeting?: boolean | null
          website_link?: string | null
          whatsapp_number?: string | null
          wheelchair_accessible?: boolean | null
          working_days?: string[] | null
          working_hours?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "listings_canton_id_fkey"
            columns: ["canton_id"]
            isOneToOne: false
            referencedRelation: "cantons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "listings_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "cities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "listings_owner_user_id_fkey"
            columns: ["owner_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "listings_owner_user_id_fkey"
            columns: ["owner_user_id"]
            isOneToOne: false
            referencedRelation: "profiles_enriched"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "listings_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "plans"
            referencedColumns: ["id"]
          },
        ]
      }
      badges_catalog: {
        Row: {
          code: string
          color_hex: string | null
          icon_ref: string | null
          id: number
          name: string
          type: string
        }
        Insert: {
          code: string
          color_hex?: string | null
          icon_ref?: string | null
          id: number
          name: string
          type: string
        }
        Update: {
          code?: string
          color_hex?: string | null
          icon_ref?: string | null
          id?: number
          name?: string
          type?: string
        }
        Relationships: []
      }
      blog_posts: {
        Row: {
          author_user_id: string | null
          body: string
          canonical_url: string | null
          content_html: string | null
          content_json: Json | null
          cover_image: string | null
          created_at: string
          excerpt: string | null
          id: string
          meta_description: string | null
          published_at: string | null
          reading_time_minutes: number | null
          scheduled_for: string | null
          seo_description: string | null
          seo_title: string | null
          slug: string
          status: string
          tags: string[] | null
          target_keyword: string | null
          title: string
          updated_at: string
        }
        Insert: {
          author_user_id?: string | null
          body: string
          canonical_url?: string | null
          content_html?: string | null
          content_json?: Json | null
          cover_image?: string | null
          created_at?: string
          excerpt?: string | null
          id?: string
          meta_description?: string | null
          published_at?: string | null
          reading_time_minutes?: number | null
          scheduled_for?: string | null
          seo_description?: string | null
          seo_title?: string | null
          slug: string
          status?: string
          tags?: string[] | null
          target_keyword?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          author_user_id?: string | null
          body?: string
          canonical_url?: string | null
          content_html?: string | null
          content_json?: Json | null
          cover_image?: string | null
          created_at?: string
          excerpt?: string | null
          id?: string
          meta_description?: string | null
          published_at?: string | null
          reading_time_minutes?: number | null
          scheduled_for?: string | null
          seo_description?: string | null
          seo_title?: string | null
          slug?: string
          status?: string
          tags?: string[] | null
          target_keyword?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      breast_sizes: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id?: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
        Relationships: []
      }
      breast_types: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id?: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
        Relationships: []
      }
      builds: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id?: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
        Relationships: []
      }
      cantons: {
        Row: {
          id: number
          name: string
          order_index: number | null
          slug: string
        }
        Insert: {
          id: number
          name: string
          order_index?: number | null
          slug: string
        }
        Update: {
          id?: number
          name?: string
          order_index?: number | null
          slug?: string
        }
        Relationships: []
      }
      categories: {
        Row: {
          ads_count: number | null
          color_hex: string | null
          created_at: string
          id: number
          name: string | null
          slug: string | null
        }
        Insert: {
          ads_count?: number | null
          color_hex?: string | null
          created_at?: string
          id?: number
          name?: string | null
          slug?: string | null
        }
        Update: {
          ads_count?: number | null
          color_hex?: string | null
          created_at?: string
          id?: number
          name?: string | null
          slug?: string | null
        }
        Relationships: []
      }
      cities: {
        Row: {
          canton_id: number
          id: number
          name: string
          order_index: number | null
          slug: string
        }
        Insert: {
          canton_id: number
          id: number
          name: string
          order_index?: number | null
          slug: string
        }
        Update: {
          canton_id?: number
          id?: number
          name?: string
          order_index?: number | null
          slug?: string
        }
        Relationships: [
          {
            foreignKeyName: "cities_canton_id_fkey"
            columns: ["canton_id"]
            isOneToOne: false
            referencedRelation: "cantons"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_messages: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
        }
        Relationships: []
      }
      countries_catalog: {
        Row: {
          continent: string
          name: string
        }
        Insert: {
          continent: string
          name: string
        }
        Update: {
          continent?: string
          name?: string
        }
        Relationships: []
      }
      discussions: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          id: number
          status: string | null
          title: string
          topic_id: number
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: number
          status?: string | null
          title: string
          topic_id: number
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: number
          status?: string | null
          title?: string
          topic_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "discussions_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "discussions_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles_enriched"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "discussions_topic_id_fkey"
            columns: ["topic_id"]
            isOneToOne: false
            referencedRelation: "topics"
            referencedColumns: ["id"]
          },
        ]
      }
      do_travel_options: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id?: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
        Relationships: []
      }
      email_logs: {
        Row: {
          id: string
          listing_id: string | null
          recipient_email: string
          sent_at: string
          status: string
          subject: string
          template_name: string
        }
        Insert: {
          id?: string
          listing_id?: string | null
          recipient_email: string
          sent_at?: string
          status?: string
          subject: string
          template_name: string
        }
        Update: {
          id?: string
          listing_id?: string | null
          recipient_email?: string
          sent_at?: string
          status?: string
          subject?: string
          template_name?: string
        }
        Relationships: []
      }
      email_templates: {
        Row: {
          body: string
          created_at: string
          id: string
          name: string
          subject: string
          updated_at: string
        }
        Insert: {
          body: string
          created_at?: string
          id?: string
          name: string
          subject: string
          updated_at?: string
        }
        Update: {
          body?: string
          created_at?: string
          id?: string
          name?: string
          subject?: string
          updated_at?: string
        }
        Relationships: []
      }
      events: {
        Row: {
          dates: string
          estimated_attendance: number | null
          event_name: string
          id: number
          location_city: string
          website_link: string | null
        }
        Insert: {
          dates: string
          estimated_attendance?: number | null
          event_name: string
          id?: never
          location_city: string
          website_link?: string | null
        }
        Update: {
          dates?: string
          estimated_attendance?: number | null
          event_name?: string
          id?: never
          location_city?: string
          website_link?: string | null
        }
        Relationships: []
      }
      eye_colors: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id?: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
        Relationships: []
      }
      follows: {
        Row: {
          created_at: string | null
          id: string
          subscribed_to_id: string | null
          subscriber_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          subscribed_to_id?: string | null
          subscriber_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          subscribed_to_id?: string | null
          subscriber_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "follows_subscribed_to_id_fkey"
            columns: ["subscribed_to_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "follows_subscribed_to_id_fkey"
            columns: ["subscribed_to_id"]
            isOneToOne: false
            referencedRelation: "profiles_enriched"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "follows_subscriber_id_fkey"
            columns: ["subscriber_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "follows_subscriber_id_fkey"
            columns: ["subscriber_id"]
            isOneToOne: false
            referencedRelation: "profiles_enriched"
            referencedColumns: ["id"]
          },
        ]
      }
      glossary_terms: {
        Row: {
          created_at: string
          definition: string
          id: string
          lang: string | null
          meta_description: string | null
          slug: string
          term: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          definition: string
          id?: string
          lang?: string | null
          meta_description?: string | null
          slug: string
          term: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          definition?: string
          id?: string
          lang?: string | null
          meta_description?: string | null
          slug?: string
          term?: string
          updated_at?: string
        }
        Relationships: []
      }
      hair_colors: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id?: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
        Relationships: []
      }
      heights: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id?: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
        Relationships: []
      }
      invoices: {
        Row: {
          amount_chf: number
          created_at: string
          due_date: string
          id: string
          paid: boolean
          subscription_id: string
          updated_at: string
        }
        Insert: {
          amount_chf: number
          created_at?: string
          due_date: string
          id?: string
          paid?: boolean
          subscription_id: string
          updated_at?: string
        }
        Update: {
          amount_chf?: number
          created_at?: string
          due_date?: string
          id?: string
          paid?: boolean
          subscription_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "invoices_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "subscriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      languages_catalog: {
        Row: {
          code: string | null
          id: number
          name: string
        }
        Insert: {
          code?: string | null
          id: number
          name: string
        }
        Update: {
          code?: string | null
          id?: number
          name?: string
        }
        Relationships: []
      }
      listing_agency_services: {
        Row: {
          listing_id: string
          service_id: number
        }
        Insert: {
          listing_id: string
          service_id: number
        }
        Update: {
          listing_id?: string
          service_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "listing_agency_services_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "avatar_url"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "listing_agency_services_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "agency_services_catalog"
            referencedColumns: ["id"]
          },
        ]
      }
      listing_badges: {
        Row: {
          assigned_at: string | null
          badge_id: number
          profile_id: string
          source: string
        }
        Insert: {
          assigned_at?: string | null
          badge_id: number
          profile_id: string
          source: string
        }
        Update: {
          assigned_at?: string | null
          badge_id?: number
          profile_id?: string
          source?: string
        }
        Relationships: [
          {
            foreignKeyName: "listing_badges_badge_id_fkey"
            columns: ["badge_id"]
            isOneToOne: false
            referencedRelation: "badges_catalog"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "listing_badges_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "listing_badges_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles_enriched"
            referencedColumns: ["id"]
          },
        ]
      }
      listing_blocked_countries: {
        Row: {
          country: string
          created_at: string
          id: string
          listing_id: string
        }
        Insert: {
          country: string
          created_at?: string
          id?: string
          listing_id: string
        }
        Update: {
          country?: string
          created_at?: string
          id?: string
          listing_id?: string
        }
        Relationships: []
      }
      listing_languages: {
        Row: {
          language_id: number
          listing_id: string
          proficiency: string | null
        }
        Insert: {
          language_id: number
          listing_id: string
          proficiency?: string | null
        }
        Update: {
          language_id?: number
          listing_id?: string
          proficiency?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "listing_languages_language_id_fkey"
            columns: ["language_id"]
            isOneToOne: false
            referencedRelation: "languages_catalog"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "listing_languages_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "avatar_url"
            referencedColumns: ["id"]
          },
        ]
      }
      listings_ads: {
        Row: {
          accepted_currencies: string[] | null
          accepts_couples: boolean
          addon_id: number | null
          address: string | null
          address_detail: string | null
          age: number | null
          air_conditioned: boolean
          approved: boolean | null
          avatar_url: string | null
          blocked_countries: string[] | null
          breast_size_id: number | null
          breast_type_id: number | null
          build_id: number | null
          canton_id: number | null
          category: string | null
          city_id: number | null
          created_at: string | null
          description: string | null
          do_travel: string | null
          do_travel_id: number | null
          elderly_welcomed: boolean
          email: string | null
          eye_color_id: number | null
          hair_color_id: number | null
          has_tattoos: boolean | null
          height_id: number | null
          hidden: boolean
          id: string
          is_smoker: boolean | null
          location_type: string | null
          mobility: string[] | null
          nickname: string | null
          onlyfans_link: string | null
          onsite_parking: boolean
          origin_id: number | null
          owner_id: string
          payment_methods: string[] | null
          prices: string | null
          professional_phone: string | null
          pubes_id: number | null
          role: string
          services: string[] | null
          smokers_accepted: boolean
          spoken_languages: Json | null
          status: string | null
          status_message: string | null
          updated_at: string | null
          videocam_meeting: boolean
          website_link: string | null
          whatsapp_number: string | null
          wheelchair_accessible: boolean
          working_days: string[] | null
          working_hours: string[] | null
        }
        Insert: {
          accepted_currencies?: string[] | null
          accepts_couples?: boolean
          addon_id?: number | null
          address?: string | null
          address_detail?: string | null
          age?: number | null
          air_conditioned?: boolean
          approved?: boolean | null
          avatar_url?: string | null
          blocked_countries?: string[] | null
          breast_size_id?: number | null
          breast_type_id?: number | null
          build_id?: number | null
          canton_id?: number | null
          category?: string | null
          city_id?: number | null
          created_at?: string | null
          description?: string | null
          do_travel?: string | null
          do_travel_id?: number | null
          elderly_welcomed?: boolean
          email?: string | null
          eye_color_id?: number | null
          hair_color_id?: number | null
          has_tattoos?: boolean | null
          height_id?: number | null
          hidden?: boolean
          id?: string
          is_smoker?: boolean | null
          location_type?: string | null
          mobility?: string[] | null
          nickname?: string | null
          onlyfans_link?: string | null
          onsite_parking?: boolean
          origin_id?: number | null
          owner_id: string
          payment_methods?: string[] | null
          prices?: string | null
          professional_phone?: string | null
          pubes_id?: number | null
          role?: string
          services?: string[] | null
          smokers_accepted?: boolean
          spoken_languages?: Json | null
          status?: string | null
          status_message?: string | null
          updated_at?: string | null
          videocam_meeting?: boolean
          website_link?: string | null
          whatsapp_number?: string | null
          wheelchair_accessible?: boolean
          working_days?: string[] | null
          working_hours?: string[] | null
        }
        Update: {
          accepted_currencies?: string[] | null
          accepts_couples?: boolean
          addon_id?: number | null
          address?: string | null
          address_detail?: string | null
          age?: number | null
          air_conditioned?: boolean
          approved?: boolean | null
          avatar_url?: string | null
          blocked_countries?: string[] | null
          breast_size_id?: number | null
          breast_type_id?: number | null
          build_id?: number | null
          canton_id?: number | null
          category?: string | null
          city_id?: number | null
          created_at?: string | null
          description?: string | null
          do_travel?: string | null
          do_travel_id?: number | null
          elderly_welcomed?: boolean
          email?: string | null
          eye_color_id?: number | null
          hair_color_id?: number | null
          has_tattoos?: boolean | null
          height_id?: number | null
          hidden?: boolean
          id?: string
          is_smoker?: boolean | null
          location_type?: string | null
          mobility?: string[] | null
          nickname?: string | null
          onlyfans_link?: string | null
          onsite_parking?: boolean
          origin_id?: number | null
          owner_id?: string
          payment_methods?: string[] | null
          prices?: string | null
          professional_phone?: string | null
          pubes_id?: number | null
          role?: string
          services?: string[] | null
          smokers_accepted?: boolean
          spoken_languages?: Json | null
          status?: string | null
          status_message?: string | null
          updated_at?: string | null
          videocam_meeting?: boolean
          website_link?: string | null
          whatsapp_number?: string | null
          wheelchair_accessible?: boolean
          working_days?: string[] | null
          working_hours?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "listings_ads_breast_size_id_fkey"
            columns: ["breast_size_id"]
            isOneToOne: false
            referencedRelation: "lookup_breast_size"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "listings_ads_breast_type_id_fkey"
            columns: ["breast_type_id"]
            isOneToOne: false
            referencedRelation: "lookup_breast_type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "listings_ads_build_id_fkey"
            columns: ["build_id"]
            isOneToOne: false
            referencedRelation: "lookup_build"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "listings_ads_canton_id_fkey"
            columns: ["canton_id"]
            isOneToOne: false
            referencedRelation: "cantons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "listings_ads_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "cities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "listings_ads_do_travel_id_fkey"
            columns: ["do_travel_id"]
            isOneToOne: false
            referencedRelation: "lookup_do_travel"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "listings_ads_eye_color_id_fkey"
            columns: ["eye_color_id"]
            isOneToOne: false
            referencedRelation: "lookup_eye_color"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "listings_ads_hair_color_id_fkey"
            columns: ["hair_color_id"]
            isOneToOne: false
            referencedRelation: "lookup_hair_color"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "listings_ads_height_id_fkey"
            columns: ["height_id"]
            isOneToOne: false
            referencedRelation: "lookup_height"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "listings_ads_origin_id_fkey"
            columns: ["origin_id"]
            isOneToOne: false
            referencedRelation: "lookup_origin"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "listings_ads_owner_id_fkey1"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "listings_ads_owner_id_fkey1"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "profiles_enriched"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "listings_ads_pubes_id_fkey"
            columns: ["pubes_id"]
            isOneToOne: false
            referencedRelation: "lookup_pubes"
            referencedColumns: ["id"]
          },
        ]
      }
      locations: {
        Row: {
          address: string
          canton_id: number
          contact: string | null
          id: number
          link: string | null
          name: string
          notes: string | null
          type: string
        }
        Insert: {
          address: string
          canton_id: number
          contact?: string | null
          id?: never
          link?: string | null
          name: string
          notes?: string | null
          type: string
        }
        Update: {
          address?: string
          canton_id?: number
          contact?: string | null
          id?: never
          link?: string | null
          name?: string
          notes?: string | null
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "locations_canton_id_fkey"
            columns: ["canton_id"]
            isOneToOne: false
            referencedRelation: "cantons"
            referencedColumns: ["id"]
          },
        ]
      }
      lookup_breast_size: {
        Row: {
          id: number
          label: string
          position: number | null
          slug: string | null
        }
        Insert: {
          id?: number
          label: string
          position?: number | null
          slug?: string | null
        }
        Update: {
          id?: number
          label?: string
          position?: number | null
          slug?: string | null
        }
        Relationships: []
      }
      lookup_breast_type: {
        Row: {
          id: number
          label: string
          position: number | null
          slug: string | null
        }
        Insert: {
          id?: number
          label: string
          position?: number | null
          slug?: string | null
        }
        Update: {
          id?: number
          label?: string
          position?: number | null
          slug?: string | null
        }
        Relationships: []
      }
      lookup_build: {
        Row: {
          id: number
          label: string
          position: number | null
          slug: string | null
        }
        Insert: {
          id?: number
          label: string
          position?: number | null
          slug?: string | null
        }
        Update: {
          id?: number
          label?: string
          position?: number | null
          slug?: string | null
        }
        Relationships: []
      }
      lookup_do_travel: {
        Row: {
          id: number
          label: string
          position: number | null
          slug: string | null
        }
        Insert: {
          id?: number
          label: string
          position?: number | null
          slug?: string | null
        }
        Update: {
          id?: number
          label?: string
          position?: number | null
          slug?: string | null
        }
        Relationships: []
      }
      lookup_eye_color: {
        Row: {
          id: number
          label: string
          position: number | null
          slug: string | null
        }
        Insert: {
          id?: number
          label: string
          position?: number | null
          slug?: string | null
        }
        Update: {
          id?: number
          label?: string
          position?: number | null
          slug?: string | null
        }
        Relationships: []
      }
      lookup_hair_color: {
        Row: {
          id: number
          label: string
          position: number | null
          slug: string | null
        }
        Insert: {
          id?: number
          label: string
          position?: number | null
          slug?: string | null
        }
        Update: {
          id?: number
          label?: string
          position?: number | null
          slug?: string | null
        }
        Relationships: []
      }
      lookup_height: {
        Row: {
          id: number
          label: string
          position: number | null
          slug: string | null
        }
        Insert: {
          id?: number
          label: string
          position?: number | null
          slug?: string | null
        }
        Update: {
          id?: number
          label?: string
          position?: number | null
          slug?: string | null
        }
        Relationships: []
      }
      lookup_origin: {
        Row: {
          id: number
          label: string
          position: number | null
          slug: string | null
        }
        Insert: {
          id?: number
          label: string
          position?: number | null
          slug?: string | null
        }
        Update: {
          id?: number
          label?: string
          position?: number | null
          slug?: string | null
        }
        Relationships: []
      }
      lookup_pubes: {
        Row: {
          id: number
          label: string
          position: number | null
          slug: string | null
        }
        Insert: {
          id?: number
          label: string
          position?: number | null
          slug?: string | null
        }
        Update: {
          id?: number
          label?: string
          position?: number | null
          slug?: string | null
        }
        Relationships: []
      }
      lookup_working_hours: {
        Row: {
          id: number
          label: string
          position: number | null
          slug: string | null
        }
        Insert: {
          id?: number
          label: string
          position?: number | null
          slug?: string | null
        }
        Update: {
          id?: number
          label?: string
          position?: number | null
          slug?: string | null
        }
        Relationships: []
      }
      media: {
        Row: {
          created_at: string | null
          id: string
          like_count: number
          listing_id: string | null
          profile_id: string | null
          status: Database["public"]["Enums"]["moderation_status"]
          type: Database["public"]["Enums"]["media_type"]
          url: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          like_count?: number
          listing_id?: string | null
          profile_id?: string | null
          status?: Database["public"]["Enums"]["moderation_status"]
          type?: Database["public"]["Enums"]["media_type"]
          url: string
        }
        Update: {
          created_at?: string | null
          id?: string
          like_count?: number
          listing_id?: string | null
          profile_id?: string | null
          status?: Database["public"]["Enums"]["moderation_status"]
          type?: Database["public"]["Enums"]["media_type"]
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "media_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "listings_ads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "media_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "media_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles_enriched"
            referencedColumns: ["id"]
          },
        ]
      }
      media_likes: {
        Row: {
          created_at: string
          id: string
          media_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          media_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          media_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "media_likes_media_id_fkey"
            columns: ["media_id"]
            isOneToOne: false
            referencedRelation: "media"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "media_likes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "media_likes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles_enriched"
            referencedColumns: ["id"]
          },
        ]
      }
      origins: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id?: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
        Relationships: []
      }
      plans: {
        Row: {
          audience: string | null
          duration_days: number | null
          id: number
          name: string
          price_chf: number | null
        }
        Insert: {
          audience?: string | null
          duration_days?: number | null
          id?: number
          name: string
          price_chf?: number | null
        }
        Update: {
          audience?: string | null
          duration_days?: number | null
          id?: number
          name?: string
          price_chf?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "plans_audience_fk"
            columns: ["audience"]
            isOneToOne: false
            referencedRelation: "plans_audience_catalog"
            referencedColumns: ["name"]
          },
        ]
      }
      plans_audience_catalog: {
        Row: {
          name: string
        }
        Insert: {
          name: string
        }
        Update: {
          name?: string
        }
        Relationships: []
      }
      posts: {
        Row: {
          content: string
          created_at: string | null
          created_by: string | null
          discussion_id: number
          id: number
          parent_id: number | null
        }
        Insert: {
          content: string
          created_at?: string | null
          created_by?: string | null
          discussion_id: number
          id?: number
          parent_id?: number | null
        }
        Update: {
          content?: string
          created_at?: string | null
          created_by?: string | null
          discussion_id?: number
          id?: number
          parent_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "posts_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles_enriched"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_discussion_id_fkey"
            columns: ["discussion_id"]
            isOneToOne: false
            referencedRelation: "discussions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "topics"
            referencedColumns: ["id"]
          },
        ]
      }
      profile_working_hours: {
        Row: {
          created_at: string | null
          profile_id: string
          working_hour_id: number
        }
        Insert: {
          created_at?: string | null
          profile_id: string
          working_hour_id: number
        }
        Update: {
          created_at?: string | null
          profile_id?: string
          working_hour_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "profile_working_hours_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profile_working_hours_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles_enriched"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profile_working_hours_working_hour_id_fkey"
            columns: ["working_hour_id"]
            isOneToOne: false
            referencedRelation: "lookup_working_hours"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          accepted_currencies: string[] | null
          accepts_couples: boolean
          addon_id: number | null
          addon_ids: string[] | null
          address: string | null
          address_detail: string | null
          age: number | null
          agency_services: string[] | null
          air_conditioned: boolean
          approved: boolean | null
          avatar_url: string | null
          bio: string | null
          blocked_countries: string[] | null
          breast_size: string | null
          breast_size_id: number | null
          breast_type: string | null
          breast_type_id: number | null
          build: string | null
          build_id: number | null
          canton_id: number | null
          category: string | null
          city_id: number | null
          created_at: string | null
          description: string | null
          display_name: string | null
          do_travel: string | null
          do_travel_id: number | null
          elderly_welcomed: boolean
          email: string | null
          expires_at: string | null
          eye_color: string | null
          eye_color_id: number | null
          hair_color: string | null
          hair_color_id: number | null
          has_tattoos: boolean | null
          height: string | null
          height_id: number | null
          hidden: boolean
          id: string
          is_smoker: boolean | null
          location_type: string | null
          managed_person_name: string | null
          mobility: string[] | null
          nickname: string | null
          onlyfans_link: string | null
          onsite_parking: boolean | null
          origin: string | null
          origin_id: number | null
          owner_id: string | null
          payment_methods: string[] | null
          phone: string | null
          plan_end_date: string | null
          plan_id: number | null
          plan_start_date: string | null
          prices: string | null
          professional_phone: string | null
          pubes: string | null
          pubes_id: number | null
          role: string
          salon_services: string[] | null
          services: string[] | null
          smokers_accepted: boolean
          spoken_languages: Json | null
          status: string | null
          status_message: string | null
          updated_at: string | null
          user_id: string | null
          videocam_meeting: boolean
          website_link: string | null
          whatsapp_number: string | null
          wheelchair_accessible: boolean
          working_days: string[] | null
          working_hours: string[] | null
        }
        Insert: {
          accepted_currencies?: string[] | null
          accepts_couples?: boolean
          addon_id?: number | null
          addon_ids?: string[] | null
          address?: string | null
          address_detail?: string | null
          age?: number | null
          agency_services?: string[] | null
          air_conditioned?: boolean
          approved?: boolean | null
          avatar_url?: string | null
          bio?: string | null
          blocked_countries?: string[] | null
          breast_size?: string | null
          breast_size_id?: number | null
          breast_type?: string | null
          breast_type_id?: number | null
          build?: string | null
          build_id?: number | null
          canton_id?: number | null
          category?: string | null
          city_id?: number | null
          created_at?: string | null
          description?: string | null
          display_name?: string | null
          do_travel?: string | null
          do_travel_id?: number | null
          elderly_welcomed?: boolean
          email?: string | null
          expires_at?: string | null
          eye_color?: string | null
          eye_color_id?: number | null
          hair_color?: string | null
          hair_color_id?: number | null
          has_tattoos?: boolean | null
          height?: string | null
          height_id?: number | null
          hidden?: boolean
          id: string
          is_smoker?: boolean | null
          location_type?: string | null
          managed_person_name?: string | null
          mobility?: string[] | null
          nickname?: string | null
          onlyfans_link?: string | null
          onsite_parking?: boolean | null
          origin?: string | null
          origin_id?: number | null
          owner_id?: string | null
          payment_methods?: string[] | null
          phone?: string | null
          plan_end_date?: string | null
          plan_id?: number | null
          plan_start_date?: string | null
          prices?: string | null
          professional_phone?: string | null
          pubes?: string | null
          pubes_id?: number | null
          role?: string
          salon_services?: string[] | null
          services?: string[] | null
          smokers_accepted?: boolean
          spoken_languages?: Json | null
          status?: string | null
          status_message?: string | null
          updated_at?: string | null
          user_id?: string | null
          videocam_meeting?: boolean
          website_link?: string | null
          whatsapp_number?: string | null
          wheelchair_accessible?: boolean
          working_days?: string[] | null
          working_hours?: string[] | null
        }
        Update: {
          accepted_currencies?: string[] | null
          accepts_couples?: boolean
          addon_id?: number | null
          addon_ids?: string[] | null
          address?: string | null
          address_detail?: string | null
          age?: number | null
          agency_services?: string[] | null
          air_conditioned?: boolean
          approved?: boolean | null
          avatar_url?: string | null
          bio?: string | null
          blocked_countries?: string[] | null
          breast_size?: string | null
          breast_size_id?: number | null
          breast_type?: string | null
          breast_type_id?: number | null
          build?: string | null
          build_id?: number | null
          canton_id?: number | null
          category?: string | null
          city_id?: number | null
          created_at?: string | null
          description?: string | null
          display_name?: string | null
          do_travel?: string | null
          do_travel_id?: number | null
          elderly_welcomed?: boolean
          email?: string | null
          expires_at?: string | null
          eye_color?: string | null
          eye_color_id?: number | null
          hair_color?: string | null
          hair_color_id?: number | null
          has_tattoos?: boolean | null
          height?: string | null
          height_id?: number | null
          hidden?: boolean
          id?: string
          is_smoker?: boolean | null
          location_type?: string | null
          managed_person_name?: string | null
          mobility?: string[] | null
          nickname?: string | null
          onlyfans_link?: string | null
          onsite_parking?: boolean | null
          origin?: string | null
          origin_id?: number | null
          owner_id?: string | null
          payment_methods?: string[] | null
          phone?: string | null
          plan_end_date?: string | null
          plan_id?: number | null
          plan_start_date?: string | null
          prices?: string | null
          professional_phone?: string | null
          pubes?: string | null
          pubes_id?: number | null
          role?: string
          salon_services?: string[] | null
          services?: string[] | null
          smokers_accepted?: boolean
          spoken_languages?: Json | null
          status?: string | null
          status_message?: string | null
          updated_at?: string | null
          user_id?: string | null
          videocam_meeting?: boolean
          website_link?: string | null
          whatsapp_number?: string | null
          wheelchair_accessible?: boolean
          working_days?: string[] | null
          working_hours?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_breast_size_id_fkey"
            columns: ["breast_size_id"]
            isOneToOne: false
            referencedRelation: "lookup_breast_size"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_breast_type_id_fkey"
            columns: ["breast_type_id"]
            isOneToOne: false
            referencedRelation: "lookup_breast_type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_build_id_fkey"
            columns: ["build_id"]
            isOneToOne: false
            referencedRelation: "lookup_build"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_canton_id_fkey"
            columns: ["canton_id"]
            isOneToOne: false
            referencedRelation: "cantons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "cities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_do_travel_id_fkey"
            columns: ["do_travel_id"]
            isOneToOne: false
            referencedRelation: "lookup_do_travel"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_eye_color_id_fkey"
            columns: ["eye_color_id"]
            isOneToOne: false
            referencedRelation: "lookup_eye_color"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_hair_color_id_fkey"
            columns: ["hair_color_id"]
            isOneToOne: false
            referencedRelation: "lookup_hair_color"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_height_id_fkey"
            columns: ["height_id"]
            isOneToOne: false
            referencedRelation: "lookup_height"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_origin_id_fkey"
            columns: ["origin_id"]
            isOneToOne: false
            referencedRelation: "lookup_origin"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "profiles_enriched"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_pubes_id_fkey"
            columns: ["pubes_id"]
            isOneToOne: false
            referencedRelation: "lookup_pubes"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles_lookup_backup: {
        Row: {
          backup_created_at: string | null
          breast_size: string | null
          breast_size_id: number | null
          breast_type: string | null
          breast_type_id: number | null
          build: string | null
          build_id: number | null
          do_travel: string | null
          do_travel_id: number | null
          eye_color: string | null
          eye_color_id: number | null
          hair_color: string | null
          hair_color_id: number | null
          height: string | null
          height_id: number | null
          id: string | null
          origin: string | null
          origin_id: number | null
          pubes: string | null
          pubes_id: number | null
          user_id: string | null
          working_hours: string[] | null
        }
        Insert: {
          backup_created_at?: string | null
          breast_size?: string | null
          breast_size_id?: number | null
          breast_type?: string | null
          breast_type_id?: number | null
          build?: string | null
          build_id?: number | null
          do_travel?: string | null
          do_travel_id?: number | null
          eye_color?: string | null
          eye_color_id?: number | null
          hair_color?: string | null
          hair_color_id?: number | null
          height?: string | null
          height_id?: number | null
          id?: string | null
          origin?: string | null
          origin_id?: number | null
          pubes?: string | null
          pubes_id?: number | null
          user_id?: string | null
          working_hours?: string[] | null
        }
        Update: {
          backup_created_at?: string | null
          breast_size?: string | null
          breast_size_id?: number | null
          breast_type?: string | null
          breast_type_id?: number | null
          build?: string | null
          build_id?: number | null
          do_travel?: string | null
          do_travel_id?: number | null
          eye_color?: string | null
          eye_color_id?: number | null
          hair_color?: string | null
          hair_color_id?: number | null
          height?: string | null
          height_id?: number | null
          id?: string | null
          origin?: string | null
          origin_id?: number | null
          pubes?: string | null
          pubes_id?: number | null
          user_id?: string | null
          working_hours?: string[] | null
        }
        Relationships: []
      }
      profiles_reset_backup: {
        Row: {
          accepts_couples: boolean | null
          age: number | null
          air_conditioned: boolean | null
          breast_size: string | null
          breast_size_id: number | null
          breast_type: string | null
          breast_type_id: number | null
          build: string | null
          build_id: number | null
          created_at: string | null
          do_travel: string | null
          do_travel_id: number | null
          elderly_welcomed: boolean | null
          eye_color: string | null
          eye_color_id: number | null
          hair_color: string | null
          hair_color_id: number | null
          height: string | null
          height_id: number | null
          id: string | null
          origin: string | null
          origin_id: number | null
          pubes: string | null
          pubes_id: number | null
          smokers_accepted: boolean | null
          user_id: string | null
          videocam_meeting: boolean | null
          wheelchair_accessible: boolean | null
          working_hours: string[] | null
        }
        Insert: {
          accepts_couples?: boolean | null
          age?: number | null
          air_conditioned?: boolean | null
          breast_size?: string | null
          breast_size_id?: number | null
          breast_type?: string | null
          breast_type_id?: number | null
          build?: string | null
          build_id?: number | null
          created_at?: string | null
          do_travel?: string | null
          do_travel_id?: number | null
          elderly_welcomed?: boolean | null
          eye_color?: string | null
          eye_color_id?: number | null
          hair_color?: string | null
          hair_color_id?: number | null
          height?: string | null
          height_id?: number | null
          id?: string | null
          origin?: string | null
          origin_id?: number | null
          pubes?: string | null
          pubes_id?: number | null
          smokers_accepted?: boolean | null
          user_id?: string | null
          videocam_meeting?: boolean | null
          wheelchair_accessible?: boolean | null
          working_hours?: string[] | null
        }
        Update: {
          accepts_couples?: boolean | null
          age?: number | null
          air_conditioned?: boolean | null
          breast_size?: string | null
          breast_size_id?: number | null
          breast_type?: string | null
          breast_type_id?: number | null
          build?: string | null
          build_id?: number | null
          created_at?: string | null
          do_travel?: string | null
          do_travel_id?: number | null
          elderly_welcomed?: boolean | null
          eye_color?: string | null
          eye_color_id?: number | null
          hair_color?: string | null
          hair_color_id?: number | null
          height?: string | null
          height_id?: number | null
          id?: string | null
          origin?: string | null
          origin_id?: number | null
          pubes?: string | null
          pubes_id?: number | null
          smokers_accepted?: boolean | null
          user_id?: string | null
          videocam_meeting?: boolean | null
          wheelchair_accessible?: boolean | null
          working_hours?: string[] | null
        }
        Relationships: []
      }
      pubes: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id?: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
        Relationships: []
      }
      reports: {
        Row: {
          created_at: string
          description: string | null
          id: string
          listing_id: string | null
          reason: string
          reporter_ip: string | null
          resolved_at: string | null
          resolved_by: string | null
          status: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          listing_id?: string | null
          reason: string
          reporter_ip?: string | null
          resolved_at?: string | null
          resolved_by?: string | null
          status?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          listing_id?: string | null
          reason?: string
          reporter_ip?: string | null
          resolved_at?: string | null
          resolved_by?: string | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "reports_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "avatar_url"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reports_resolved_by_fkey"
            columns: ["resolved_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reports_resolved_by_fkey"
            columns: ["resolved_by"]
            isOneToOne: false
            referencedRelation: "profiles_enriched"
            referencedColumns: ["id"]
          },
        ]
      }
      reviews: {
        Row: {
          comment: string | null
          created_at: string | null
          id: number
          rating: number | null
          reviewed_listing_id: string | null
          reviewed_user_id: string | null
          reviewer_id: string | null
          status: string | null
        }
        Insert: {
          comment?: string | null
          created_at?: string | null
          id?: never
          rating?: number | null
          reviewed_listing_id?: string | null
          reviewed_user_id?: string | null
          reviewer_id?: string | null
          status?: string | null
        }
        Update: {
          comment?: string | null
          created_at?: string | null
          id?: never
          rating?: number | null
          reviewed_listing_id?: string | null
          reviewed_user_id?: string | null
          reviewer_id?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reviews_reviewed_listing_id_fkey"
            columns: ["reviewed_listing_id"]
            isOneToOne: false
            referencedRelation: "listings_ads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_reviewed_user_id_fkey"
            columns: ["reviewed_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_reviewed_user_id_fkey"
            columns: ["reviewed_user_id"]
            isOneToOne: false
            referencedRelation: "profiles_enriched"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_reviewer_id_fkey"
            columns: ["reviewer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_reviewer_id_fkey"
            columns: ["reviewer_id"]
            isOneToOne: false
            referencedRelation: "profiles_enriched"
            referencedColumns: ["id"]
          },
        ]
      }
      services: {
        Row: {
          created_at: string | null
          id: number
          name: string
          order_index: number | null
          slug: string
        }
        Insert: {
          created_at?: string | null
          id?: never
          name: string
          order_index?: number | null
          slug: string
        }
        Update: {
          created_at?: string | null
          id?: never
          name?: string
          order_index?: number | null
          slug?: string
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          created_at: string
          end_date: string
          id: string
          is_paid: boolean
          plan: string
          price_chf: number
          start_date: string
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          end_date?: string
          id?: string
          is_paid?: boolean
          plan?: string
          price_chf?: number
          start_date?: string
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          end_date?: string
          id?: string
          is_paid?: boolean
          plan?: string
          price_chf?: number
          start_date?: string
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscriptions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles_enriched"
            referencedColumns: ["id"]
          },
        ]
      }
      topics: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          id: number
          status: string | null
          title: string
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: number
          status?: string | null
          title: string
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: number
          status?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "topics_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "topics_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles_enriched"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      profiles_enriched: {
        Row: {
          accepted_currencies: string[] | null
          accepts_couples: boolean | null
          addon_id: number | null
          address: string | null
          address_detail: string | null
          age: number | null
          agency_services: string[] | null
          air_conditioned: boolean | null
          approved: boolean | null
          avatar_url: string | null
          bio: string | null
          blocked_countries: string[] | null
          breast_size: string | null
          breast_size_id: number | null
          breast_type: string | null
          breast_type_id: number | null
          build: string | null
          build_id: number | null
          canton_id: number | null
          canton_name: string | null
          category: string | null
          city_id: number | null
          city_name: string | null
          created_at: string | null
          description: string | null
          display_name: string | null
          do_travel: string | null
          do_travel_id: number | null
          elderly_welcomed: boolean | null
          email: string | null
          expires_at: string | null
          eye_color: string | null
          eye_color_id: number | null
          hair_color: string | null
          hair_color_id: number | null
          has_tattoos: boolean | null
          height: string | null
          height_id: number | null
          hidden: boolean | null
          id: string | null
          is_smoker: boolean | null
          location_type: string | null
          managed_person_name: string | null
          mobility: string[] | null
          nickname: string | null
          onlyfans_link: string | null
          onsite_parking: boolean | null
          origin: string | null
          origin_id: number | null
          payment_methods: string[] | null
          phone: string | null
          plan_id: number | null
          prices: string | null
          professional_phone: string | null
          pubes: string | null
          pubes_id: number | null
          role: string | null
          salon_services: string[] | null
          services: string[] | null
          smokers_accepted: boolean | null
          spoken_languages: Json | null
          status: string | null
          status_message: string | null
          updated_at: string | null
          user_id: string | null
          videocam_meeting: boolean | null
          website_link: string | null
          whatsapp_number: string | null
          wheelchair_accessible: boolean | null
          working_days: string[] | null
          working_hours: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_breast_size_id_fkey"
            columns: ["breast_size_id"]
            isOneToOne: false
            referencedRelation: "lookup_breast_size"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_breast_type_id_fkey"
            columns: ["breast_type_id"]
            isOneToOne: false
            referencedRelation: "lookup_breast_type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_build_id_fkey"
            columns: ["build_id"]
            isOneToOne: false
            referencedRelation: "lookup_build"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_canton_id_fkey"
            columns: ["canton_id"]
            isOneToOne: false
            referencedRelation: "cantons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "cities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_do_travel_id_fkey"
            columns: ["do_travel_id"]
            isOneToOne: false
            referencedRelation: "lookup_do_travel"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_eye_color_id_fkey"
            columns: ["eye_color_id"]
            isOneToOne: false
            referencedRelation: "lookup_eye_color"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_hair_color_id_fkey"
            columns: ["hair_color_id"]
            isOneToOne: false
            referencedRelation: "lookup_hair_color"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_height_id_fkey"
            columns: ["height_id"]
            isOneToOne: false
            referencedRelation: "lookup_height"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_origin_id_fkey"
            columns: ["origin_id"]
            isOneToOne: false
            referencedRelation: "lookup_origin"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_pubes_id_fkey"
            columns: ["pubes_id"]
            isOneToOne: false
            referencedRelation: "lookup_pubes"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      decrement_ads_count: {
        Args: { category_id: number }
        Returns: undefined
      }
      decrement_media_like_count: {
        Args: { media_id_param: string }
        Returns: undefined
      }
      generate_reading_time: {
        Args: { content_text: string }
        Returns: number
      }
      get_current_user_role: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      increment_ads_count: {
        Args: { category_id: number }
        Returns: undefined
      }
      increment_media_like_count: {
        Args: { media_id_param: string }
        Returns: undefined
      }
      is_moderator: {
        Args: { uid: string }
        Returns: boolean
      }
      update_ads_count: {
        Args: { category_id: number }
        Returns: undefined
      }
    }
    Enums: {
      listing_status:
        | "draft"
        | "submitted"
        | "approved"
        | "active"
        | "inactive"
        | "hidden"
        | "deleted"
      media_type: "photo" | "verified_photo" | "selfie" | "video" | "avatar"
      moderation_status: "pending" | "approved" | "rejected"
      report_status: "new" | "reviewed" | "action_taken"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      listing_status: [
        "draft",
        "submitted",
        "approved",
        "active",
        "inactive",
        "hidden",
        "deleted",
      ],
      media_type: ["photo", "verified_photo", "selfie", "video", "avatar"],
      moderation_status: ["pending", "approved", "rejected"],
      report_status: ["new", "reviewed", "action_taken"],
    },
  },
} as const
