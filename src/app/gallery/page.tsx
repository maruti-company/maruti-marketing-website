"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Filter, Grid, List, Image, Video } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const GalleryPage = () => {
  const [filter, setFilter] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [contentType, setContentType] = useState("images");

  const categories = [
    "all",
    "plywood",
    "laminates",
    "interiors",
    "other",
  ];

  const projects = [
    {
      id: 1,
      category: "plywood",
      image: "/images/_PNP1886.JPG",
    },
    {
      id: 2,
      category: "laminates",
      image: "/images/_PNP1870.JPG",
    },
    {
      id: 3,
      category: "interiors",
      image: "/images/_PNP1934.JPG",
    },
    {
      id: 4,
      category: "plywood",
      image: "/images/_PNP1804.JPG",
    },
    {
      id: 5,
      category: "laminates",
      image: "/images/_PNP1784.JPG",
    },
    {
      id: 6,
      category: "interiors",
      image: "/images/_PNP1836.JPG",
    },
    {
      id: 7,
      category: "other",
      image: "/images/_PNP1917.JPG",
    },
    {
      id: 8,
      category: "plywood",
      image: "/images/_PNP1893.JPG",
    },
    {
      id: 9,
      category: "laminates",
      image: "/images/_PNP1777.JPG",
    },
    {
      id: 10,
      category: "interiors",
      image: "/images/_PNP1798.JPG",
    },
    {
      id: 11,
      category: "other",
      image: "/images/_PNP1897.JPG",
    },
    {
      id: 12,
      category: "plywood",
      image: "/images/_PNP1844.JPG",
    },
    {
      id: 13,
      category: "laminates",
      image: "/images/_PNP1822.JPG",
    },
  ];

  const videos = [
    {
      id: 1,
      src: "/videos/01.mp4",
    }
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-subtle opacity-90"></div>
          <div className="container mx-auto px-4 relative z-10 max-w-7xl pt-32">
            <div className="flex items-center gap-4 mb-8">
              <Link
                href="/"
                className="flex items-center gap-2 text-primary-foreground hover:opacity-80 transition-smooth"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </Link>
            </div>
            <div className="max-w-4xl">
              <h1 className="text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6">
                Products Gallery
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Explore our portfolio of completed projects showcasing the
                beauty and versatility of our products.
              </p>
            </div>
          </div>
        </section>

        {/* Filter and View Controls */}
        <section className="py-8 bg-background border-b border-border">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              {/* Content Type Toggle */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-muted p-1 rounded-lg">
                  <Button
                    variant={contentType === "images" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setContentType("images")}
                    className="flex items-center gap-2"
                  >
                    <Image className="w-4 h-4" />
                    Images
                  </Button>
                  <Button
                    variant={contentType === "videos" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setContentType("videos")}
                    className="flex items-center gap-2"
                  >
                    <Video className="w-4 h-4" />
                    Videos
                  </Button>
                </div>
              </div>

              {/* Filters - Only show for images */}
              {contentType === "images" && (
                <div className="flex items-center gap-4">
                  <Filter className="w-5 h-5 text-muted-foreground" />
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={filter === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setFilter(category)}
                        className="capitalize"
                      >
                        {category === "all" ? "All Products" : category}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* View Mode */}
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            {contentType === "images" ? (
              <div
                className={`grid gap-8 ${
                  viewMode === "grid"
                    ? "md:grid-cols-2 lg:grid-cols-3"
                    : "max-w-4xl mx-auto"
                }`}
              >
                {filteredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className={`group bg-gradient-card rounded-2xl shadow-card hover-lift border border-border/50 overflow-hidden ${
                      viewMode === "list" ? "flex flex-col md:flex-row" : ""
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div
                      className={`relative overflow-hidden ${
                        viewMode === "list" ? "md:w-1/2" : "aspect-[4/3]"
                      }`}
                    >
                      <img
                        src={project.image}
                        alt={`${project.category} project`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                    </div>

                    <div
                      className={`p-6 ${viewMode === "list" ? "md:w-1/2 flex flex-col justify-center" : ""}`}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-center">
                          <span className="px-4 py-2 bg-gradient-hero text-primary-foreground text-sm rounded-full capitalize font-semibold shadow-md">
                            {project.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {videos.map((video, index) => (
                  <div
                    key={video.id}
                    className="group bg-gradient-card rounded-2xl shadow-card hover-lift border border-border/50 overflow-hidden"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative aspect-video">
                      <video
                        src={video.src}
                        className="w-full h-full object-cover rounded-t-2xl"
                        autoPlay
                        muted
                        loop
                        controls
                        controlsList="nodownload"
                        preload="metadata"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none"></div>
                      
                      {/* Download Button */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-smooth">
                        <a
                          href={video.src}
                          download={`video-${video.id}.mp4`}
                          className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-smooth"
                          title="Download Video"
                        >
                          <svg 
                            className="w-5 h-5" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {contentType === "images" && filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">
                  No projects found for the selected category.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default GalleryPage;
