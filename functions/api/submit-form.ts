interface Env {
  // bindings
}

export const onRequestPost = async (context: { request: Request, env: Env }) => {
  const { request } = context;
  
  try {
    const formData = await request.formData();
    // Convert multiple checkboxes for 'interest' into array if needed, 
    // but Object.fromEntries takes last value.
    // Better to handle manually.
    const output: Record<string, any> = {};
    for (const [key, value] of formData.entries()) {
      if (output[key]) {
        if (!Array.isArray(output[key])) {
          output[key] = [output[key]];
        }
        output[key].push(value);
      } else {
        output[key] = value;
      }
    }

    // Simulate processing
    await new Promise(r => setTimeout(r, 500));

    return new Response(JSON.stringify({
      status: "SIGNAL_RECEIVED",
      message: "Transmission successful. We will unbrol your request shortly.",
      data: output,
      timestamp: new Date().toISOString()
    }), {
      status: 200,
      headers: { 
        "Content-Type": "application/json" 
      }
    });

  } catch (err) {
    return new Response(JSON.stringify({
      status: "ERROR",
      message: "Signal Lost."
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
